// models/Manga.js

const mongoose = require('mongoose');

//manga schema structure for the app
const MangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  initial_release_date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  illustrator: {
    type: String
  },
  total_volume_count: {
    type: Date
  },
  number_owned: {
    type: String
  },
  rating:{
      type:String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Manga = mongoose.model('manga', MangaSchema);