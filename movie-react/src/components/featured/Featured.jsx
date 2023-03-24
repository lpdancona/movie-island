import React from "react";
import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
export default function Featured({ type }) {
  return (
    <div className="featured">
      <img
        src="https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Avatar-Logo-avatar.svg/800px-Avatar-Logo-avatar.svg.png?20100209153655"
          alt=""
        />
        <span className="desc">
          A paraplegic Marine dispatched to the moon Pandora on a unique mission
          becomes torn between following his orders and protecting the world he
          feels is his home.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
        </div>
      </div>
    </div>
  );
}
