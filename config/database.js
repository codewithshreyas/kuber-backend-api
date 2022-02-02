module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '194.59.164.107'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u513157518_Kubear'),
      user: env('DATABASE_USERNAME', 'u513157518_god'),
      password: env('DATABASE_PASSWORD', 'Mahasambhuti@12'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
