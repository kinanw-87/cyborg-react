import "./MainProfileLibrary.css";
import {
  MainProfileLibraryCard,
  SectionWrapper,
  SectionHeader,
} from "../../components/index";
import GamingLibraryData from "../../Data/GamingLibraryData ";
import { Slide } from "react-awesome-reveal";

const MainProfileLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <MainProfileLibraryCard
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
        </div>
      </SectionWrapper>
    </>
  );
};
export default MainProfileLibrary;
