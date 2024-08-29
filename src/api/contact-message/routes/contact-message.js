// path: ./src/api/contact-message/routes/contact-message.js

"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/contact-messages",
      handler: "contact-message.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/contact-messages",
      handler: "contact-message.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
