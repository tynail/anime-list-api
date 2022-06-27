const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  numberOfEpisode: Number,
  numberOfSeason: Number, // TODO: create schema for season and point this one to the schema season
  numberOfWatchedEpisode: Number,
});

module.exports = mongoose.model("Serie", SerieSchema);
