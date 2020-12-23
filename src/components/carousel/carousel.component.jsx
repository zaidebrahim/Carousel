import React from "react";
import "./carousel.styles.css";

const Carousel = (props) => {
  const { data } = props;
  return (
    <div className="carousel-container">
      <div className="carousel-heading">Banners</div>
      <div className="carousel">
        {data.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              name={item.name}
              imgUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
//Carousel individual item component
const CarouselItem = (props) => {
  const { name, imgUrl } = props;
  return (
    <div className="carousel-item">
      <div className="image-container">
        <img src={imgUrl} alt="CarouselImage" className="image" />
      </div>
      <div className="name-container">{name}</div>
    </div>
  );
};

export default Carousel;
