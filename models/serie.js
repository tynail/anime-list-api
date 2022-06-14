const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
  title: String,
  description: String,
  numberOfEpisode: Number,
  numberOfSeason: Number,
  numberOfWatchedEpisode: Number,
});

module.exports = mongoose.model("Serie", SerieSchema);
