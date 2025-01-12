"use client";
import React from "react";
import { useDataContext } from "../context/DataContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const BannersSection = () => {
  const { data } = useDataContext();
  const bannerData = data?.[1]?.props;

  if (!bannerData || bannerData.length === 0) {
    return (
      <div className="my-5 px-5 md:px-20">
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay
        >
          {[...Array(5)].map(
            (
              _,
              index // Generate 5 skeleton items
            ) => (
              <div key={index} className="m-2 rounded-2xl">
                <SkeletonTheme color="#e0e0e0" highlightColor="#f4f4f4">
                  <Skeleton
                    height={140}
                    width="100%"
                    containerClassName="skeleton-container"
                  />
                </SkeletonTheme>
              </div>
            )
          )}
        </Carousel>
      </div>
    );
  }

  return (
    <section className="my-5 px-5 md:px-20">
      <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay>
        {bannerData.map((item, index) => (
          <Link href={item.deeplink} key={index}>
            <div className="m-2">
              <img
                src={item.bannerUrl}
                alt={`Banner ${index}`}
                className="w-full h-[120px] md:h-[160px] object-fill" // Ensure same height and maintain aspect ratio
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default BannersSection;
