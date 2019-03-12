
module.exports = (sequelize, DataTypes) => {
  const Parcel = sequelize.define('Parcel', {
    // FK (users)
    user_id: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    status: DataTypes.STRING,
    delivery_start: DataTypes.DATE,
    delivery_end: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  })

  return Parcel
}