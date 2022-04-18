---
title: Hit me up
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >
      Wanna tell me I'm full of it?  Interested in something?  Whatever it is,
      I'd love to hear it.  
    form_id: contactForm
    form_action: /api/contactform
    form_fields:
      - input_type: text
        name: Name
        label: You
        is_required: true
        default_value: Name
      - input_type: email
        name: email
        label: Email
        default_value: Your email
        is_required: true
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: page

---
Interested in something? Wanna tell me I'm full of it? Whatever it is, I'd [love to hear from you](mailto:dylan@saltyonsecurity.net).  

<form action="https://contact-dev.frontier.workers.dev/" method="post" class="form-horizontal ajax-form">
  <!-- Notifications -->
  <p class="msg-container text-center"></p>

  <div class="form-group">
      <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Your name"/>
          </div>
          <div class="form-group">
            <label for="eml">Email</label>
            <input type="email" class="form-control validate validate_userEmail" name="eml" id="eml" placeholder="Your email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              rows="5"
              class="form-control validate validate_msgText"
              name="message"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary"
              data-btn-label="Submit"
              data-btn-label-processing="Processing.."
            >
              Submit
            </button>
          </div>
          <input
            type="text"
            class="input-honeypot"
            style="visibility:hidden;width:1px;height:1px;padding:0px;border:none;"
            name="eml2"
            value=""
          />
        </form>

        
  </div>
      <!-- /End Contact Form Col -->
    </div>
  </div>

  <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"
  ></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script> $(document).on("submit", "form.ajax-form", function(e) {
      e.preventDefault();
      var currentForm = $(this); // Get current form object
    // disable submit button
      $("[type=submit]", currentForm).attr("disabled", "disabled");
      // clean up the msg container
      $(".msg-container", currentForm)
        .html("")
        .attr("class", "msg-container text-center")
        .css("display", "hidden");
      // remove fields error classes
      currentForm.find(".is-invalid").removeClass("is-invalid");
      // add preloader
      $("[type=submit]", currentForm).html(
        $("[type=submit]", currentForm).data("btn-label-processing")
      );

      let formData = $(this)
        .serializeArray()
        .map(
          function(x) {
            this[x.name] = x.value;
            return this;
          }.bind({})
        )[0];

      axios({
        method: $(this).attr("method"),
        url: $(this).attr("action"),
        data: formData
      })
        .then(function(response) {
          var hand = setTimeout(function() {
            // clear the form if form submitted successfully
            $(currentForm).trigger("reset");

            // show returned message
            $(".msg-container", currentForm)
              .addClass("alert alert-success")
              .html(response.data["message"])
              .css("display", "none");

            // enable submit button again
            var btnLabel = $("[type=submit]", currentForm).data("btn-label");
            $("[type=submit]", currentForm).removeAttr("disabled");
            $("[type=submit]", currentForm).html(btnLabel);
            clearTimeout(hand);
          }, 1000);
        })
        .catch(function(error) {
          // show returned message
          $(".msg-container", currentForm)
            .addClass("alert alert-danger")
            .html(error.response.data["message"])
            .css("display", "block");

          // enable submit button again
          var btnLabel = $("[type=submit]", currentForm).data("btn-label");
          $("[type=submit]", currentForm).removeAttr("disabled");
          $("[type=submit]", currentForm).html(btnLabel);

          console.log(error);
        });

      return false;
    });
  </script>