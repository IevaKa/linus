module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "kaziukonyte.ieva@gmail.com",
      defaultReplyTo: "kaziukonyte.ieva@gmail.com",
    },
  },
});
