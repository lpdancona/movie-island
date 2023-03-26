import React, { useState } from "react";
import "./newMovie.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const NewMovie = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [imgSm, setImgSm] = useState("");
  const [trailer, setTrailer] = useState("");
  const [video, setVideo] = useState("");
  const [year, setYear] = useState("");
  const [limit, setLimit] = useState("");
  const [genre, setGenre] = useState("");
  const [isSeries, setIsSeries] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovie = {
        title,
        desc,
        img,
        imgTitle,
        imgSm,
        trailer,
        video,
        year,
        limit,
        genre,
        isSeries,
      };
      await axios.post("/movies", newMovie);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <form className="form-new" onSubmit={handleSubmit}>
        <h1>Create a Movie</h1>
        <div className="form-main">
          <div className="form-left">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter a title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter a description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Image</label>
            <input
              type="text"
              placeholder="Enter an image URL"
              onChange={(e) => setImg(e.target.value)}
            />
            <label>Image Title</label>
            <input
              type="text"
              placeholder="Enter an image title"
              onChange={(e) => setImgTitle(e.target.value)}
            />
            <label>Small Image</label>
            <input
              type="text"
              placeholder="Enter a small image URL"
              onChange={(e) => setImgSm(e.target.value)}
            />
          </div>
          <div className="form-rigth">
            <label>Trailer</label>
            <input
              type="text"
              placeholder="Enter a trailer URL"
              onChange={(e) => setTrailer(e.target.value)}
            />
            <label>Video</label>
            <input
              type="text"
              placeholder="Enter a video URL"
              onChange={(e) => setVideo(e.target.value)}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder="Enter a year"
              onChange={(e) => setYear(e.target.value)}
            />
            <label>Limit</label>
            <input
              type="number"
              placeholder="Enter a limit"
              onChange={(e) => setLimit(e.target.value)}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder="Enter a genre"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
        </div>
        <label>Is Series?</label>
        <input
          type="checkbox"
          onChange={(e) => setIsSeries(e.target.checked)}
        />
        <button type="submit">Create</button>
      </form>
      <Footer />
    </div>
  );
};

export default NewMovie;
