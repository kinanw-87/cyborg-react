import "./TopStreamers.css";
import {
  SectionHeader,
  SectionWrapper,
  TopStreamersCard,
} from "../../components/index";
import StreamData from "../../Data/StreamData";
import { Slide } from "react-awesome-reveal";

const TopStreamers = () => {
  const cards = StreamData.map((card) => {
    return (
      <TopStreamersCard
        key={card.id}
        avatar={card.avatar}
        player={card.player}
      />
    );
  });
  return (
    <SectionWrapper>
      <Slide>
        <SectionHeader>
          top <em>streamers</em>
        </SectionHeader>
      </Slide>
      <div className="top-streamers-items">{cards}</div>
    </SectionWrapper>
  );
};
export default TopStreamers;
