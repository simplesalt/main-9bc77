// @ts-ignore
import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "saltyonsecurity contact", email: "dylan@saltyonsecurity.net" }],
    },
  ],
  from: { name: "saltyonsecurity contact page", email: "dylan@saltyonsecurity.net" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});