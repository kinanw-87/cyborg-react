import "./StreamCard.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Roll } from "react-awesome-reveal";

const StreamCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <Roll>
          <div className="stream-item">
            <div className="stream-item-thumb">
              <img src={props.image} alt="" />
              <div className="stream-item-thumb-hover-effect">
                <div className="stream-item-thumb-content">
                  <div className="stream-item-thumb-live">
                    <a href="/#">Live</a>
                  </div>
                  <ul className="d-flex flex-row">
                    <li>
                      <a href="/#">
                        <span className="eye-icon">
                          <FaEye />
                        </span>
                        1.2K
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="gamepad-icon">
                          <FaGamepad />
                        </span>
                        CS-GO
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="stream-item-avatar col-3">
                <img src={props.avatar} />
              </div>
              <div className="col-8">
                <div className="stream-item-name">
                  <FaCheckCircle />
                  <span>{props.player}</span>
                </div>
                <h4 className="stream-item-title"> {props.title} </h4>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </>
  );
};
export default StreamCard;
