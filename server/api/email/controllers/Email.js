module.exports = {
  send: async (ctx) => {
    try {
      const { to, amount } = ctx.request.body;
      await strapi.plugins["email"].services.email.send({
        to,
        subject: "Your investment has been submitted.",
        html: `<h1>Thank you!</h1><p>Your ${amount}EUR investment has been submitted.</p>`,
      });
      ctx.send("email sent");
    } catch (err) {
      strapi.log.error(err);
    }
  },
};
