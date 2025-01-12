"use client";
import React from "react";
import { useDataContext } from "../context/DataContext";
import Carousel from "react-multi-carousel";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UserReviewSection = () => {
  const { data } = useDataContext();
  const UserReviewData = data?.[5]?.props;

  if (!UserReviewData || UserReviewData.length === 0) {
    return (
      <section className="px-5 md:px-20 py-6">
        <h2 className="text-center text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold mb-6">
          What our Users say
        </h2>
        <div className="flex gap-3">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="border-2 shadow-sm rounded-2xl min-h-[200px] h-[250px] w-full p-6 mx-2 flex flex-col justify-between"
            >
              <Skeleton height={20} width={100} />
              <Skeleton height={80} />
              <Skeleton height={20} width={150} />
              <div className="flex items-center mt-2 gap-2">
                <Skeleton circle={true} height={40} width={40} />
                <Skeleton height={20} width={100} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 md:px-20 py-6">
      <h2 className="text-center text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold mb-6">
        What our Users say
      </h2>
      <div>
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay
        >
          {UserReviewData.map((item, index) => (
            <div
              key={index}
              className="border-2 shadow-sm rounded-2xl min-h-[200px] h-[250px] p-6 mx-2 flex flex-col justify-between"
            >
              {/* rating */}
              <div className="flex items-center gap-1 justify-between">
                <div className="flex items-center gap-1">
                  {Array(item.rating)
                    .fill()
                    .map((_, index) => (
                      <img src="/star_icon.svg" key={index} width={20} />
                    ))}
                </div>
                <p className="text-gray-400 text-xs ml-2">{item.days}</p>
              </div>
              <div className="my-2">
                <p className="text-center text-sm text-gray-500">
                  {item.content}
                </p>
              </div>
              <hr />
              <div className="flex items-center mt-2 gap-2">
                <img src="/profile_icon.svg" className="w-8" />
                <p className="text-[#050a4e] font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default UserReviewSection;
