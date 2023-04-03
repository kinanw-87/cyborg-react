import "./TopDownloadedCard.css";
import { FaStar, FaDownload } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
const TopDownloadedCard = (props) => {
  return (
    <>
      <div className="top-downloaded-item col-12">
        <Slide>
          <ul className="d-flex flex-row align-items-center">
            <li className="col-lg-2 col-md-4 col-sm-4 d-flex justify-content-center">
              <img className="top-downloaded-item-img" src={props.image} />
            </li>
            <li className="col-lg-8 col-md-4 col-sm-4">
              <h4 className="top-downloaded-item-title"> {props.title} </h4>
              <span className="top-downloaded-item-category">
                {props.category}
              </span>
              <br />
              <span className="star-icon">
                <FaStar />
              </span>
              <span> {props.rate} </span>
              <span className="download-icon">
                <FaDownload />
              </span>
              <span> {props.download} </span>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-4 ">
              <a className="d-flex justify-content-center">
                <span className="download-icon icon-button d-flex justify-content-center align-items-center">
                  <FaDownload />
                </span>
              </a>
            </li>
          </ul>
        </Slide>
      </div>
    </>
  );
};
export default TopDownloadedCard;
