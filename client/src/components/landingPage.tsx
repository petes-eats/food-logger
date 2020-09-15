import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function LandingPage(props: any): any {
  return (
    <div className="text-center">
      <h1>Landing Page</h1>
      <Carousel responsive={responsive}>
        <div>
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
          <span>Hello Alex</span>
          <span>Click for more!</span>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
          <span>Hello Alex</span>
          <span>Click for more!</span>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
          <span>Hello Alex</span>
          <span>Click for more!</span>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
          <span>Hello Alex</span>
          <span>Click for more!</span>
        </div>
      </Carousel>

      <div className="grid grid-cols-2">
        <div className="text-center bg-gray-200">Chicken Dishes</div>
        <div className="align-center">
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
        </div>
        <div className="align-center">
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
        </div>
        <div className="text-center bg-gray-200">Vegetarian</div>
        <div className="text-center bg-gray-200">Chicken Dishes</div>
        <div className="align-center">
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
        </div>
        <div className="align-center">
          <img
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          ></img>
        </div>
        <div className="text-center bg-gray-200">Vegetarian</div>
      </div>
    </div>
  );
}
