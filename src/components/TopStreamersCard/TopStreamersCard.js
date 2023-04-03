import "./TopStreamersCard.css";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../Buttons/Buttons";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const TopStreamersCard = (props) => {
  return (
    <>
      <div className="top-streamer d-flex">
        <div className="top-streamer-avatar col-8">
          <Fade direction="left">
            <div className="avatar">
              <img src={props.avatar} />
              <div className="player-name">
                <FaCheckCircle />
                <span>{props.player}</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="top-streamer-btn col-4">
          <Fade direction="right">
            <PrimaryButton>
              <Link to="/streams" className="route-link-prim-btn">
                Follow
              </Link>
            </PrimaryButton>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default TopStreamersCard;
