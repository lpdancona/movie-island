import { ArrowBackOutlined } from "@material-ui/icons";
import "./videoWatch.scss";
import videoSource from "../../assets/video.mp4"
export default function VideoWatch() {

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={videoSource}
      />
    </div>
  );
}