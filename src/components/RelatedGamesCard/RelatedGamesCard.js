import "./RelatedGamesCard.css";
import { FaStar, FaDownload } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const RelatedGamesCard = (props) => {
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <Fade direction="right">
          <div className="related-game-item d-flex flex-row align-items-center">
            <img className="related-game-item-img col-4" src={props.image} />
            <div className="related-game-item-text col-4">
              <h4 className="related-game-item-title"> {props.title} </h4>
              <span> {props.category} </span>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  <span> {props.rate} </span>
                </li>
                <li>
                  <span className="download-icon">
                    <FaDownload />
                  </span>
                  <span> {props.download} </span>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
export default RelatedGamesCard;
