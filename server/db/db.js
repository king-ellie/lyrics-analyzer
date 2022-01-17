const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize('postgres://localhost/lyricsanalyzer', { logging: false })

// Define models here or move them to other files in the db directory
const Piece = db.define('Piece', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const Artist = db.define('Artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

})

Piece.belongsTo(Artist)
Artist.hasMany(Piece)

module.exports = {
    db,
    models: {
        Piece,
        Artist
    }
}
