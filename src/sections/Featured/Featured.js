import "./Featured.css";
import {
  FeaturedCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index";
import FeaturedData from "../../Data/FeaturedData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";
import { Slide } from "react-awesome-reveal";

const Featured = () => {
  const cards = FeaturedData.map((card) => {
    return (
      <SwiperSlide>
        <FeaturedCard
          key={card.id}
          image={card.image}
          title={card.title}
          nod={card.nod}
          rate={card.rate}
          download={card.download}
        />
      </SwiperSlide>
    );
  });

  return (
    <SectionWrapper>
      <Slide>
        <SectionHeader>
          <em>Featured</em> Games
        </SectionHeader>
      </Slide>
      <div className="wrapper-swiper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {cards}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};
export default Featured;
