'use strict'
const _a = require('sequelize'); const Sequelize = _a.Sequelize; const DataTypes = _a.DataTypes
let dbName
const db = new Sequelize('postgres://localhost/'.concat(dbName), { logging: false })
// Define models here or move them to other files in the db directory
const SampleModel = db.define('nameOfModel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})
module.exports = {
    db: db,
    models: {
        SampleModel: SampleModel
    }
}
