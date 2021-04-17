const mongoose = require('mongoose');
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    display_name: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
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
    }
  });
  
module.exports = User = mongoose.model('user', UserSchema);