import "./FeatureBanner.css";
import { FaPlay } from "react-icons/fa";
import FeaturLift from "../../assets/images/feature-left.jpg";
import FeaturRight from "../../assets/images/feature-right.jpg";
import { JackInTheBox } from "react-awesome-reveal";

const FeatureBanner = () => {
  return (
    <div className="feature-banner row">
      <div className="col-lg-4 col-md-12 col-sm-12">
        <JackInTheBox>
          <img src={FeaturLift} />
        </JackInTheBox>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12">
        <JackInTheBox>
          <div className="thumb">
            <img src={FeaturRight} />
            <a
              href="/#"
              className="d-flex justify-content-center align-items-center"
            >
              <FaPlay />
            </a>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};
export default FeatureBanner;
