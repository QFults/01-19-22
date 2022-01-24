const { model, Schema } = require('mongoose')

const Song = new Schema({
  title: String,
  artist: String,
  album: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Song', Song)
