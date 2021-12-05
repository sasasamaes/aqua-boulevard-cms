module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4d072b814dc38faa6dc690dbf51be07'),
  },
});
