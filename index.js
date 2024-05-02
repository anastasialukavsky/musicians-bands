const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const Manager = require('./models/Manager')
// Define associations here


Band.hasMany(Musician)
Musician.belongsTo(Band)

Band.belongsToMany(Song, { through: 'BandSong' }); 
Song.belongsToMany(Band, { through: 'BandSong' });

Band.belongsTo(Manager); 
Manager.hasOne(Band); 

module.exports = {
    Band,
    Musician,
    Song,
    Manager
};
