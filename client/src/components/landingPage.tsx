import React from "react";

import LandingPageCarousel from "./LandingPageCarousel";

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

      <LandingPageCarousel />

      <div className="grid grid-cols-2">
        <div className="text-center font-bold text-3xl">Chicken Dishes</div>

        <div className="align-center">
          <img
            className="object-contain h-48 w-full"
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          />
        </div>

        <div className="align-center">
          <img
            className="object-contain h-48 w-full"
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          />
        </div>

        <div className="text-center bg-gray-200 font-bold text-3xl">Vegan</div>

        <div className="text-center bg-gray-200 font-bold text-3xl">
          Breakfast Recipes
        </div>

        <div className="align-center">
          <img
            className="object-contain h-48 w-full"
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          />
        </div>

        <div className="align-center">
          <img
            className="object-contain h-48 w-full"
            src="https://i.gyazo.com/382874084392664241454615805458c2.png"
            alt=""
          />
        </div>

        <div className="text-center bg-gray-200 font-bold text-3xl">
          Vegetarian
        </div>
      </div>
    </div>
  );
}
