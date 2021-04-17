const mongoose = require('mongoose');
const validator = require("validator")

const PortfolioSchema = new mongoose.Schema({
    intro_paragraph: {
        type: String
    },
    clips: {
        type: [ClipSchema]
    },
    external_links: {
        type: [LinkSchema]
    }
});

const ClipSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    character: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    clip_url: {
        type: String,
        validate: {
            validator: validator.isURL,
            message: '{VALUE} is not a valid URL',
            isAsync: false
        }
    },
    clip_date: {
        type: Date
    }
})

const LinkSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        validate: {
            validator: validator.isURL,
            message: '{VALUE} is not a valid URL',
            isAsync: false
        }
    }
})
    
module.exports = Portfolio = mongoose.model('user', PortfolioSchema);