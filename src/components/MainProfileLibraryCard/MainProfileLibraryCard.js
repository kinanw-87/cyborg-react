import "./MainProfileLibraryCard.css";
import { Slide } from "react-awesome-reveal";

const MainProfileLibraryCard = (props) => {
  return (
    <div className="main-prfile-library-item col-12">
      <Slide>
        <ul className="row">
          <li className="col-lg-2 col-md-12 col-sm-12">
            <img className="main-prfile-library-item-image" src={props.image} />
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
            <a href="#">Downloaded</a>
          </li>
        </ul>
      </Slide>
    </div>
  );
};
export default MainProfileLibraryCard;
