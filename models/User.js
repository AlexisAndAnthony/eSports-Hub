const mongoose = require('mongoose');
const validator = require("validator")

const GameMainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String
    }
})
  
const GameRankSchema = new mongoose.Schema({
    gamemode: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    }
})

const UserGameSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true,
    },
    username: {
        type: String
    },
    region: {
        type: String
    },
    mains: {
        type: [GameMainSchema]
    },
    ranks: {
        type: [GameRankSchema]
    }
});

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    email: {
        type:String,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    display_name: {
        type: String
    },
    tags: {
        type: String
    },
    profile_picture_url: {
        type: String,
        validate:{
            validator: validator.isURL,
            message: '{VALUE} is not a valid URL',
            isAsync: false
        }
    },
    primary_region: {
        type: String
    },
    account_date: {
        type: Date,
        default: Date.now
    },
    games: {
        type: [UserGameSchema]
    }
});

module.exports = User = mongoose.model('user', UserSchema);