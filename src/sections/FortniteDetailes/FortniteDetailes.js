import "./FortniteDetailes.css";
import GameDetailes_1 from "../../assets/images/details-01.jpg";
import GameDetailes_2 from "../../assets/images/details-02.jpg";
import GameDetailes_3 from "../../assets/images/details-03.jpg";
import {
  SectionHeader,
  SectionWrapper,
  SecondaryButton,
  GamesDetailes,
} from "../../components/index";
import { Slide, Roll } from "react-awesome-reveal";

const FortniteDetailes = () => {
  return (
    <SectionWrapper>
      <Slide>
        <SectionHeader>
          <h4 className="fortnite-detailes-title">Fortnite Detailes</h4>
        </SectionHeader>
      </Slide>
      <GamesDetailes
        key="game-detailes_0"
        name="Fortnite"
        category="Sandbox"
        rate="4.8"
        download="2.3m"
        memory="36GB"
        classification="Action"
      />
      <div className="game-images row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Roll>
            <img src={GameDetailes_1} />
          </Roll>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Roll>
            <img src={GameDetailes_2} />
          </Roll>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Roll>
            <img src={GameDetailes_3} />
          </Roll>
        </div>
      </div>
      <Slide>
        <div className="game-text">
          <p>
            Cyborg Gaming is free HTML CSS website template provided by
            TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small
            contribution via PayPal to info [at] templatemo.com and thank you
            for supporting. If you want to get the PSD source files, please
            contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei
            elit, sed doers eiusmod lisum hored tempor.
          </p>
        </div>
      </Slide>
      <div className="game-download-btn">
        <SecondaryButton>Download Fortnite Now!</SecondaryButton>
      </div>
    </SectionWrapper>
  );
};
export default FortniteDetailes;
