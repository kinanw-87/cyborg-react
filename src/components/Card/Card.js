import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";
import { Roll } from "react-awesome-reveal";
const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <Roll>
          <div className="most-pop-item">
            <img className="most-pop-item-img" src={props.image} />
            <div className="row">
              <div className="most-pop-item-text col-6">
                <h4 className="most-pop-item-title"> {props.title} </h4>
                <span> {props.category} </span>
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
        </Roll>
      </div>
    </>
  );
};
export default Card;
