import "./MostPopular.css";
import {
  Card,
  SectionHeader,
  SectionWrapper,
  PrimaryButton,
} from "../../components/index";
import MostPopularData from "../../Data/MostPopularData";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
const MostPopular = () => {
  const cards = MostPopularData.map((card) => {
    return (
      <Card
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
      <div className="row">
        <div className="col-lg-12">
          <Slide>
            <SectionHeader>
              <em>Mosr Popular</em>
              Right Now
            </SectionHeader>
          </Slide>
          <div className="most-pop-items row">{cards}</div>
        </div>
        <div className="col-lg-12 main-button ">
          <PrimaryButton>
            <Link to="/browse" className="route-link-prim-btn">
              Discover Popular
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default MostPopular;
