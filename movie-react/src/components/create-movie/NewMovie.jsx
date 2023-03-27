import React, { useState } from "react";
import "./newMovie.scss";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Container, Row } from "react-bootstrap";
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
    <div className="body">
      <div className="main">
        <Navbar />
        <h1 className="DText">Post A Movie</h1>
        <form className="form-new" onSubmit={handleSubmit}>
          <Container className="mainContainer">
            <Row className="row">
              <label className="title">Title</label>
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
            </Row>
            <Row>
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
            </Row>
          </Container>
          <Container className="check">
            <label className="isSeries">Is Series?</label>
            <input
              className="checkbox"
              type="checkbox"
              onChange={(e) => setIsSeries(e.target.checked)}
            />
          </Container>
          <button type="submit" className="subBtn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMovie;
