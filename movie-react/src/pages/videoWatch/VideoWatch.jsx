import { ArrowBackOutlined } from "@material-ui/icons";
import "./videoWatch.scss";
import { useSearchParams, Link } from "react-router-dom";

export default function VideoWatch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const src = searchParams.get("src");

  return (
    <div className="watch">
      <div className="back">
        <Link to="/" className="link">
          <div className="arrow-back">
            <ArrowBackOutlined />
          </div>
        </Link>
      </div>
      <video className="video" autoPlay progress controls src={src} />
    </div>
  );
}
