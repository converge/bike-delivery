const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  // function, because I need access to this object
  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

  // generate JSON Web Token
  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET)
  }

  return User
}