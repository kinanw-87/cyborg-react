import "./MainProfile.css";
import ProfileImage from "../../assets/images/profile.jpg";
import {
  SectionHeader,
  SectionWrapper,
  SecondaryButton,
  PrimaryButton,
  MostPopClipsCard,
} from "../../components/index";
import MostPopClipsData from "../../Data/MostPopClipsData";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const MainProfile = () => {
  const cards = MostPopClipsData.map((card) => {
    return (
      <MostPopClipsCard
        key={card.id}
        image={card.image}
        numClip={card.numClip}
        views={card.views}
      />
    );
  });

  return (
    <SectionWrapper>
      <div className="main-profile-content row">
        <div className="col-lg-4">
          <Slide direction="left">
            <img src={ProfileImage} />
          </Slide>
        </div>
        <div className="col-lg-4">
          <Slide direction="down">
            <div className="player-info">
              <span>Offline</span>
              <h4>alan smithee</h4>
              <p>
                You Haven't Gone Live yet. Go Live By Touching The Button Below.
              </p>
              <div className="live-start-btn">
                <SecondaryButton>Start Live Stream</SecondaryButton>
              </div>
            </div>
          </Slide>
        </div>
        <div className="col-lg-4">
          <Slide direction="right">
            <ul>
              <li>
                Games Downloaded
                <span>3</span>
              </li>
              <li>
                Friends Online
                <span>16</span>
              </li>
              <li>
                Live Streams
                <span>None</span>
              </li>
              <li>
                Clips
                <span>29</span>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
      <Slide>
        <SectionHeader>
          <em>Your Most Popular </em> Clips
        </SectionHeader>
      </Slide>
      <div className="main-profile-items row">{cards}</div>
      <div className="main-profile-btn text-center">
        <PrimaryButton>
          <Link to="/Profile" className="route-link-prim-btn">
            Load More Clips
          </Link>
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
};
export default MainProfile;
