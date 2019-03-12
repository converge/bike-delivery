require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  // (OR) is necessary here because sequelize db:migrate doesnt read .env files
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'docker',
  password: process.env.DB_PASS || 'docker',
  database: process.env.DB_NAME || 'bike_delivery',
  // if not set, use postgres
  dialect: process.env.DB_DIALECT || 'postgres',
  // SQLite DB for tests
  storage: './__tests__/database.sqlite',
  // disable warning
  operatorsAliases: false,
  logging: false,
  define: {
    // auto update created and modified fields with timestamps
    timestamps: true,
    // underline entity name
    underscored: true,
    // underline for fields also
    underscoredAll: true,
  },
}