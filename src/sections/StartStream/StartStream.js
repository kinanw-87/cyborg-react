import "./StartStream.css";
import Service_1 from "../../assets/images/service-01.jpg";
import Service_2 from "../../assets/images/service-02.jpg";
import Service_3 from "../../assets/images/service-03.jpg";
import { Link } from "react-router-dom";
import { Slide, Rotate } from "react-awesome-reveal";

import { SectionHeader, PrimaryButton } from "../../components/index";

const StartStream = () => {
  return (
    <div className="start-stream-container">
      <Slide>
        <SectionHeader>
          <em>How To Start Your</em> Live Stream
        </SectionHeader>
      </Slide>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Rotate>
            <div className="start-stream-item d-flex flex-column">
              <div className="start-stream-item-img">
                <img src={Service_1} alt="" />
              </div>
              <h4>Go To Your Profile</h4>
              <p>
                Cyborg Gaming is free HTML CSS website template provided by
                TemplateMo. This is Bootstrap v5.2.0 layout.
              </p>
            </div>
          </Rotate>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Rotate>
            <div className="start-stream-item d-flex flex-column">
              <div className="start-stream-item-img">
                <img src={Service_2} alt="" />
              </div>
              <h4>Live Stream Button</h4>
              <p>
                If you wish to support us, you can make a small contribution via
                PayPal to info [at] templatemo.com
              </p>
            </div>
          </Rotate>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Rotate>
            <div className="start-stream-item d-flex flex-column ">
              <div className="start-stream-item-img">
                <img src={Service_3} alt="" />
              </div>
              <h4>You Are Live</h4>
              <p>
                You are not allowed to redistribute this template's downloadable
                ZIP file on any other template collection website.
              </p>
            </div>
          </Rotate>
        </div>
      </div>
      <PrimaryButton>
        <Link to="/profile" className="route-link-prim-btn">
          Go To Profile
        </Link>
      </PrimaryButton>
    </div>
  );
};
export default StartStream;
