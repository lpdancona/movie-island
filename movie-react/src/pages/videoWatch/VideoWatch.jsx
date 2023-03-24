import { ArrowBackOutlined } from "@material-ui/icons";
import "./videoWatch.scss";
import { useSearchParams } from "react-router-dom";



export default function VideoWatch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const src = searchParams.get("src") 


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
        src={src}
      />
    </div>
  );
}