const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    begin_at: {
        type: Date,
        required: true
    },
    end_at: {
        type: Date,
        required: true
    },
    prize_pool: {
        type: string
    },
    matches: {
        type: [MatchSchema]
    }
});

const MatchSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    begin_at: {
        type: Date,
        required: true
    },
    end_at: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number_of_games: {
        type: Number
    },
    status: {
        type: String,
        required: true
    }
})
  
module.exports = Tournament = mongoose.model('tournament', TournamentSchema);