const mongoose = require('mongoose');
const validator = require("validator")

const PostSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      validate:{
        validator: validator.isURL,
        message: '{VALUE} is not a valid URL',
        isAsync: false
      }
    },
    post_date: {
      type: Date,
      default: Date.now
    },
    poster_id: {
      type: String,
      required: true
    }
  });
  
module.exports = Post = mongoose.model('post', PostSchema);