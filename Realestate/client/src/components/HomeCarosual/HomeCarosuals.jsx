import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarosuals = ({ offerListings }) => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Navigating to /listing/${id}`);
    navigate(`/listing/${id}`);
  };

  const items = offerListings.map((item, i) => (
    <div 
      key={i}
      className="flex justify-center items-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <img
        className="cursor-pointer rounded-2xl drop-shadow-lg shadow-lg w-[98%] h-[98%] object-fill"
        onClick={() => handleImageClick(item._id)}
        src={item.imageUrls[0]}
        alt={item.name}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  ));

  return (
    <div className="w-[98%] mx-auto">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
};

export default HomeCarosuals;
