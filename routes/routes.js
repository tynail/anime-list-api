const express = require("express");
const router = express.Router();
const Serie = require("../models/serie");

// Post anime
router.post("/post", async (req, res) => {
  const serie = new Serie({ title: "Manifest", description: "Nice serie!" });
  await serie.save();
  res.send(serie);
});

router.get("/getAll", (req, res) => {
  res.send("Get all API");
});

router.get("/getOne/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

router.patch("/update/:id", (req, res) => {
  res.send("Update by id API");
});

router.delete("/update/:id", (req, res) => {
  res.send("Delete by id API");
});

module.exports = router;
