const express = require("express");
const router = express.Router();
const Serie = require("../models/serie");

// Post serie
router.post("/serie", async (req, res) => {
  const {
    title,
    description,
    numberOfEpisode,
    numberOfSeason,
    numberOfWatchedEpisode,
  } = req.body;

  const serie = new Serie({
    title: title,
    description: description,
    numberOfEpisode: numberOfEpisode,
    numberOfSeason: numberOfSeason,
    numberOfWatchedEpisode: numberOfWatchedEpisode,
  });

  try {
    const savedSerie = await serie.save();
    res.status(200).json(savedSerie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/series", async (req, res) => {
  try {
    const allSeries = await Serie.find();
    res.status(200).json(allSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/serie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const serie = await Serie.findById(id);
    res.status(200).json({ serie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/serie/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const options = { new: true }; // Specifie to return the updated data in the body
  try {
    const updatedSerie = await Serie.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(updatedSerie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/serie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Serie.findByIdAndDelete(id);
    res.send(`Serie with id ${id} was successfully deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
