const express = require("express");
const router = express.Router();
const UserMovie = require("../models/userMovie");

router.post("/movies", async (req, res) => {
  console.log("Received a request to /api/movies");
  try {
    const newMovie = new UserMovie({
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      imgTitle: req.body.imgTitle,
      imgSm: req.body.imgSm,
      trailer: req.body.trailer,
      video: req.body.video,
      year: req.body.year,
      limit: req.body.limit,
      genre: req.body.genre,
      isSeries: req.body.isSeries,
    });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
