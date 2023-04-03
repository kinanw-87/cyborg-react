import "./MostPopClipsCard.css";
import { FaEye, FaPlay } from "react-icons/fa";
import { Roll } from "react-awesome-reveal";

const MostPopClipsCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <Roll>
          <div className="most-pop-clip-item">
            <div className="thumb">
              <img src={props.image} />
              <a href="/#">
                <FaPlay />
              </a>
            </div>
            <div className="down-content">
              <h4>{props.numClip} Clip</h4>
              <p>
                <span className="eye-icon m-1">
                  <FaEye />
                </span>
                {props.views}
              </p>
            </div>
          </div>
        </Roll>
      </div>
    </>
  );
};
export default MostPopClipsCard;
