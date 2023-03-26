import React from "react";
import "./featured.scss";
import { PlayArrow } from "@material-ui/icons";
import avatarLogo from "../../assets/avatar-logo.png";
import { Link } from "react-router-dom";

export default function Featured({ type }) {
  return (
    <div className="featured">
      <img
        src="https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200"
        alt=""
      />
      <div className="info">
        <img className="info-logo" src={avatarLogo} alt="" />
        <span className="desc">
          A paraplegic Marine dispatched to the moon Pandora on a unique mission
          becomes torn between following his orders and protecting the world he
          feels is his home.
        </span>
        <Link to="https://www.youtube.com/watch_popup?v=5PSNL1qE6VY&autoplay=1">
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
