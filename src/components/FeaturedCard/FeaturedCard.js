import "./FeaturedCard.css";
import { FaStar, FaDownload } from "react-icons/fa";

const FeaturedCard = (props) => {
  return (
    <>
      <div className="featured-item">
        <div className="featured-item-thumb">
          <img className="featured-item-img" src={props.image} alt="" />
          <div className="hover-effect">
            <h6>2.5K Streaming</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6 featured-item-text">
            <h4 className="featured-item-title">{props.title}</h4>
            <span>{props.nod}</span>
          </div>
          <div className="col-6">
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
      </div>
    </>
  );
};
export default FeaturedCard;
