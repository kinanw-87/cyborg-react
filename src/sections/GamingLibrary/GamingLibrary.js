import { Link } from "react-router-dom";
import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionWrapper,
  SectionHeader,
  PrimaryButton,
} from "../../components/index";
import GamingLibraryData from "../../Data/GamingLibraryData ";
import { Slide } from "react-awesome-reveal";

const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.date_Added}
        hours_played={card.hours_played}
        currently={card.currently}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <div className="row">
          <div className="col-lg-12">
            <Slide>
              <SectionHeader>
                <em>your gaming</em>
                Library
              </SectionHeader>
            </Slide>
          </div>
          <div className="row">{cards}</div>
          <div className="col-lg-12 main-button">
            <PrimaryButton>
              <Link to="/profile" className="route-link-prim-btn">
                View Your Library
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
export default GamingLibrary;
