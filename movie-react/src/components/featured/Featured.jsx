import React from "react";
import "./featured.scss";
import { PlayArrow } from "@material-ui/icons";
import avatarLogo from "../../assets/avatar-logo.png";
import { Link } from "react-router-dom";

export default function Featured({ type }) {

  if (type === "series") {
    return (
      <div className="featured">
      <img
        src="https://occ-0-1567-769.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeMZkNnHuV8Y6pFrWEjxEZG8xvjo-JqEJzrBVbBo76pxXC9QOCBcJZZU0KjD8hONdRR6x9QAGgpUZCLr0ljFcZlBS1gjBo-Y5D6-.jpg?r=570"
        alt=""
      />
      <div className="info">
        <img className="info-logo"
          src="https://logos-world.net/wp-content/uploads/2022/12/Logo-Wednesday.png"
          alt=""
        />
        <span className="desc">
        Follows Wednesday Addams' years as a student, when she attempts to master her 
        emerging psychic ability, thwart a killing spree, and solve the mystery that 
        embroiled her parents.
        </span>
        <div className="buttons">
          <Link to="https://www.youtube.com/watch_popup?v=Di310WS8zLk&autoplay=1">
            <button className="play">
              <PlayArrow />
              <span className="button-text">Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
  } else {
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
        <div className="buttons">
          <Link to="https://www.youtube.com/watch_popup?v=5PSNL1qE6VY&autoplay=1">
            <button className="play">
              <PlayArrow />
              <span className="button-text">Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
  }
}
