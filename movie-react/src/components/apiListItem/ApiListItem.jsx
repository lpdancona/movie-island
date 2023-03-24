import "./apiListItem.scss";
import video from "../../assets/video.mp4";
import imageSource from "../../assets/card.png";

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ApiListItem({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && <img src={movie.image} alt="CardPic" />}
      {isHovered && (
        <>
          <iframe
            width="100%"
            height="150"
            src={`${movie.trailer}?autoplay=1&mute=1&controls=0&modestbranding=1`}
            allow="autoplay"
            allowFullScreen
            autoPlay={true}
          />
          <div className="itemInfo">
            <div className="icons">
              <span>{movie.title}</span>
              {/* <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" /> */}
            </div>
            <div className="itemInfoTop">
              <span>Rating: {movie.rating}</span>
              <span className="limit">{movie.id}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.description}</div>
            <div className="genre">
              {movie.genre.length > 1
                ? `${movie.genre[0]}, ${movie.genre[1]}`
                : movie.genre}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
