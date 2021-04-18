const mongoose = require('mongoose');
const validator = require("validator")

const LeagueInfoSchema = new mongoose.Schema({
    champion_name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        validate: {
            validator: validator.isURL,
            message: '{VALUE} is not a valid URL',
            isAsync: false
        }
    }
});

module.exports = LeagueInfo = mongoose.model('user', LeagueInfoSchema);