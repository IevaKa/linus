module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: env("SENDGRID_SEND_FROM"),
      defaultReplyTo: env("SENDGRID_SEND_FROM"),
    },
  },
});
