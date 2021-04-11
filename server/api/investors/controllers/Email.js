module.exports = {
  index: async (ctx) => {
    const { to, amount } = ctx.request.header;
    await strapi.plugins["email"].services.email.send({
      to: to,
      from: "kaziukonyte.ieva@gmail.com",
      replyTo: "kaziukonyte.ieva@gmail.com",
      subject: "Your investment has been submitted.",
      html: `<h1>Thank you!</h1><p>Your ${amount}EUR investment has been submitted.</p>`,
    });
    ctx.send("email sent");
  },
};
