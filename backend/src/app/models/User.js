const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    is_admin: DataTypes.INTEGER,
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

  // function, because we need access to this object
  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

  // generate JSON Web Token
  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id, isAdmin: this.is_admin }, process.env.APP_SECRET)
  }

  return User
}