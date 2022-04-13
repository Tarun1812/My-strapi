module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a51dfe41a73d41375a05a138a2a3e25a'),
  },
});
