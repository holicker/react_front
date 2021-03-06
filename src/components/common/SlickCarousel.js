import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

const SlickCarouselBlock = styled(BasicDiv)`
  display: absolute;
  height: 100%;
  width: 30rem;
`;

const SlickCarouselItem = styled(BasicDiv)`
  background-color: black;
  height: 10rem;
  width: 15rem;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlickCarousel = ({ type, images }) => {
  return (
    <SlickCarouselBlock>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <SlickCarouselItem key={image.id}>
              <Image src={`https://localhost:8443/${type}/image/${image.id}`} />
            </SlickCarouselItem>
          ))}
      </Slider>
    </SlickCarouselBlock>
  );
};

export default SlickCarousel;
