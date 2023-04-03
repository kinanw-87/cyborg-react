import "./MostPopLiveStream.css";
import {
  SectionHeader,
  SectionWrapper,
  PrimaryButton,
  StreamCard,
} from "../../components/index";
import StreamData from "../../Data/StreamData";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const MostPopLiveStream = () => {
  const cards = StreamData.map((card) => {
    return (
      <StreamCard
        key={card.id}
        image={card.image}
        avatar={card.avatar}
        player={card.player}
        title={card.title}
      />
    );
  });
  return (
    <SectionWrapper>
      <Slide>
        <SectionHeader>
          <em>Most Popular</em> Live Stream
        </SectionHeader>
      </Slide>
      <div className="most-pop-items row"> {cards} </div>
      <div className="col-lg-12 most-pop-btn">
        <PrimaryButton>
          <Link to="/streams" className="route-link-prim-btn">
            Load More Streams
          </Link>
        </PrimaryButton>
      </div>
    </SectionWrapper>
  );
};
export default MostPopLiveStream;
