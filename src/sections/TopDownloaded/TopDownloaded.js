import "./TopDownloaded.css";
import {
  TopDownloadedCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index";
import TopDownloadedData from "../../Data/TopDownloadedData";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
const TopDownloaded = () => {
  const cards = TopDownloadedData.map((card) => {
    return (
      <TopDownloadedCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <Slide>
          <SectionHeader>
            <em>Top</em>
            Downloaded
          </SectionHeader>
        </Slide>
        <div className="downloaded-items row">{cards}</div>
        <div className="button-link">
          <Link to="/profile" className="link">
            View All Games
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};
export default TopDownloaded;
