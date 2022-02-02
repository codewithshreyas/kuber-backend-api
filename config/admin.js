module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8db0598e21ba5edf4cd5227b44301f33'),
  },
});
