# Bike Delivery

### Install

Create Database
npx sequelize db:migrate

Destroy Database
npx sequelize db:migrate:undo:all

Create/Delete Random users + admin
api_base_url/create_users
api_base_url/delete_users


Create/Delete Random Parcels
npx sequelize db:seed:all
npx sequelize db:seed:undo:all

save it for later: (docker)
npx sequelize db:migrate:undo:all;npx sequelize db:migrate;nodemon src/server.js