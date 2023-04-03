import { Link } from "react-router-dom";
import "./Hero.css";
import PrimaryButton from "../../components/Buttons/Buttons";
import { Slide } from "react-awesome-reveal";
const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <Slide>
          <div className="hero-text">
            <h6 className="hero-subtitle">Welcome To Cyborg</h6>
            <h4 className="hero-title">
              <em>Browse</em> our popular games here
            </h4>
            <PrimaryButton>
              <Link to="/browse" className="route-link-prim-btn">
                Browse Now
              </Link>
            </PrimaryButton>
          </div>
        </Slide>
      </div>
    </>
  );
};
export default Hero;
