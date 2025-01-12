"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDataContext } from "../context/DataContext";

const OurFeaturesSection = () => {
  const { data } = useDataContext();
  const featuresData = data?.[7]?.props;

  const [isMobile, setIsMobile] = useState(false);

  // Update `isMobile` based on the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!featuresData) {
    return (
      <section className="px-5 md:px-20 my-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl shadow-sm border mx-2 p-3"
              >
                <Skeleton circle={true} width={56} height={56} />
                <div className="flex flex-col">
                  <Skeleton width={120} height={20} />
                  <Skeleton width={150} height={15} />
                  <Skeleton width={100} height={15} />
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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

  return (
    <section className="px-5 md:px-20 my-6">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        autoPlay={isMobile} // Enable autoplay only on mobile
        autoPlaySpeed={3000}
        draggable={isMobile} // Enable dragging only on mobile
        swipeable={isMobile} // Enable swiping only on mobile
        containerClass="carousel-container"
      >
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-6 rounded-xl shadow-sm border mx-2 p-3 md:border-none"
          >
            <img src={item.img} alt={item.title} className="w-14 h-14" />
            <div className="flex flex-col justify-center">
              <h3 className="text-[#050a4e] font-semibold">{item.title}</h3>
              <p className="text-sm">{item.subTitle}</p>
              <p className="text-sm">{item.subText}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OurFeaturesSection;
