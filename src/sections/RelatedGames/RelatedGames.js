import "./RelatedGames.css";
import RelatedGamesdata from "../../Data/RelatedGamesData";
import {
  SectionHeader,
  SectionWrapper,
  RelatedGamesCard,
} from "../../components/index";
import { Slide } from "react-awesome-reveal";

const RelatedGames = () => {
  const cards = RelatedGamesdata.map((card) => {
    return (
      <RelatedGamesCard
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
    <SectionWrapper>
      <Slide>
        <SectionHeader>
          <em>other related</em>game
        </SectionHeader>
      </Slide>
      <div className="related-game-items row">{cards}</div>
    </SectionWrapper>
  );
};
export default RelatedGames;
