require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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