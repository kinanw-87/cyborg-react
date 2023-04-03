import "./GamingLibraryCard.css";
import { SecondaryButton } from "../../components/index";
import { Slide } from "react-awesome-reveal";

const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-item col-12">
      <Slide>
        <ul className="row">
          <li className="col-lg-2 col-md-12 col-sm-12">
            <img className="gaming-item-image" src={props.image} />
          </li>
          <li className="col-lg-2 col-md-6 col-sm-12">
            <h6> {props.title} </h6>
            <span> {props.category} </span>
          </li>
          <li className="col-lg-2 col-md-6 col-sm-12">
            <h6>Date Added</h6>
            <span> {props.date_added} </span>
          </li>
          <li className="col-lg-2 col-md-6 col-sm-12">
            <h6>Hours Played</h6>
            <span> {props.hours_played} </span>
          </li>
          <li className="col-lg-2 col-md-6 col-sm-12">
            <h6>Currently</h6>
            <span>{props.currently}</span>
          </li>
          <li className="col-lg-2 col-md-12 col-sm-12">
            <SecondaryButton>Download</SecondaryButton>
          </li>
        </ul>
      </Slide>
    </div>
  );
};
export default GamingLibraryCard;
