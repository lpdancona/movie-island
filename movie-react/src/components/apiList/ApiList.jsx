import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, useEffect } from "react";
import ApiListItem from "../apiListItem/ApiListItem";
import "./apiList.scss";
import axios from "axios";
export default function ApiList() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 58;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    // console.log(distance)
    if (direction === "right" && slideNumber < 50) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "e57e689fcemsh86edc713520fcdap1938a7jsnc24238f337f8",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(movies);
  return (
    <div className="list">
      <span className="listTitle">Top 100 All Time Movies</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: (!isMoved || slideNumber === 0) && "none" }}
        />
        <div className="container" ref={listRef}>
          {movies.map((movie, i) => (
            <ApiListItem index={i} movie={movie} key={movie.id} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
