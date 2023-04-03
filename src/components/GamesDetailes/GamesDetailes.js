import "./GamesDetailes.css";
import { FaServer, FaDownload, FaStar, FaGamepad } from "react-icons/fa";
import { JackInTheBox } from "react-awesome-reveal";
const GamesDetailes = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <JackInTheBox>
            <div className="game-left-info d-flex">
              <div className="game-name col-6">
                <h4>{props.name}</h4>
                <span>{props.category}</span>
              </div>
              <div className="game-disc col-6">
                <ul>
                  <li>
                    <span className="star-icon">
                      <FaStar />
                    </span>
                    {props.rate}
                  </li>
                  <li>
                    <span className="download-icon">
                      <FaDownload />
                    </span>
                    {props.download}
                  </li>
                </ul>
              </div>
            </div>
          </JackInTheBox>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <JackInTheBox>
            <div className="game-right-info">
              <ul>
                <li>
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  {props.rate}
                </li>
                <li>
                  <span className="download-icon">
                    <FaDownload />
                  </span>
                  {props.download}
                </li>
                <li>
                  <span className="server-icon">
                    <FaServer />
                  </span>
                  {props.memory}
                </li>
                <li>
                  <span className="gamepad-icon">
                    <FaGamepad />
                  </span>
                  {props.classification}
                </li>
              </ul>
            </div>
          </JackInTheBox>
        </div>
      </div>
    </>
  );
};
export default GamesDetailes;
