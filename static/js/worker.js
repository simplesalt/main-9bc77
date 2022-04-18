/*
 * Serverless contact form handler for Cloudflare Workers.
 * Emails are sent via Mailgun.
 *
 * Learn more at https://maxkostinevich.com/blog/serverless-contact-form
 * Live demo: https://codesandbox.io/s/serverless-contact-form-example-x0neb
 *
 * (c) Max Kostinevich / https://maxkostinevich.com
 */

// Script configuration
const config = {
    mailgun_key: "YOUR_MAILGUN_API_KEY",
    mailgun_domain: "YOUR_MAILGUN_DOMAIN",
    from: "no-reply <no-reply@YOUR_DOMAIN>",
    admin_email: "xxxxx@YOUR_DOMAIN",
    email_field: "eml", // email field name
    form_fields: ["name", "message"], // list of required fields
    honeypot_field: "eml2" // honeypot field name
  };
  
  // --------
  
  // utility function to convert object to url string
  const urlfy = obj =>
    Object.keys(obj)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
      .join("&");
  
  // Helper function to return JSON response
  const JSONResponse = (message, status = 200) => {
    let headers = {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
  
      status: status
    };
  
    let response = {
      message: message
    };
  
    return new Response(JSON.stringify(response), headers);
  };
  
  addEventListener("fetch", event => {
    const request = event.request;
    if (request.method === "OPTIONS") {
      event.respondWith(handleOptions(request));
    } else {
      event.respondWith(handle(request));
    }
  });
  
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  function handleOptions(request) {
    if (
      request.headers.get("Origin") !== null &&
      request.headers.get("Access-Control-Request-Method") !== null &&
      request.headers.get("Access-Control-Request-Headers") !== null
    ) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      });
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          Allow: "GET, HEAD, POST, OPTIONS"
        }
      });
    }
  }
  
  async function handle(request) {
    try {
      const form = await request.json();
  
      // Honeypot / anti-spam check
      // Honeypot field should be hidden on the frontend (via css),
      // and always have an empty value. If value is not empty, then (most likely) the form has been filled-in by spam-bot
      if (form[config.honeypot_field] !== "") {
        return JSONResponse("Invalid request", 400);
      }
  
      // Validate form inputs
      for (let i = 0; i < config.form_fields.length; i++) {
        let field = config.form_fields[i];
        if (form[field] === "") {
          return JSONResponse(`${field} is required`, 400);
        }
      }
  
      // Validate email field
      let email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (
        form[config.email_field] == "" ||
        !email_regex.test(form[config.email_field])
      ) {
        return JSONResponse("Please, enter valid email address", 400);
      }
  
      // assign email address to the form
      form["email"] = form[config.email_field];
  
      const admin_template = `
  <html>
  <head>
      <title>New message from ${form.name}</title>
  </head>
  <body>
  New message has been sent via website.<br><br>
  
  <b>Name:</b> ${form.name} <br>
  <b>Email:</b> ${form.email} <br>
  <br>
  <b>Message:</b><br>
  ${form.message.replace(/(?:\r\n|\r|\n)/g, "<br>")}
  
  </body>
  </html>
  `;
  
      const user_template = `
  Hello ${form.name},
  
  Thank you for contacting me!
  
  I have received your message and I will get back to you as soon as possible.
  `;
  
      let admin_data = {
        from: config.from,
        to: config.admin_email,
        subject: `New message from ${form.name}`,
        html: admin_template,
        "h:Reply-To": form.email // reply to user
      };
  
      let admin_options = {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa("api:" + config.mailgun_key),
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": admin_data.length
        },
        body: urlfy(admin_data)
      };
  
      let user_data = {
        from: config.from,
        to: form.email,
        subject: "Thank you for contacting me!",
        html: user_template,
        "h:Reply-To": config.admin_email // reply to admin
      };
  
      let user_options = {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa("api:" + config.mailgun_key),
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": user_data.length
        },
        body: urlfy(user_data)
      };
  
      try {
        /*
        let results = await Promise.all([
          fetch(`https://api.mailgun.net/v3/${config.mailgun_domain}/messages`, admin_options),
          fetch(`https://api.mailgun.net/v3/${config.mailgun_domain}/messages`, user_options)
        ]);
        console.log('Got results');
        console.log(results);
        */
        return JSONResponse("Message has been sent");
      } catch (err) {
        console.log("Error");
        console.log(err);
        return JSONResponse("Oops! Something went wrong.", 400);
      }
    } catch (err) {
      return new Response("");
    }
  }