"use client";
import React from "react";
import { useDataContext } from "../context/DataContext";
import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

const IconsSection = () => {
  const { data } = useDataContext();
  const iconsData = data?.[0]?.props;

  if (!iconsData || iconsData.length === 0) {
    return (
      <section className="px-5 md:px-20 grid grid-cols-3 gap-5 md:flex md:items-center md:justify-between m-5 md:w-3/4 md:m-auto">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <SkeletonTheme color="#e0e0e0" highlightColor="#f4f4f4">
              <Skeleton
                circle
                height={60}
                width={60}
                containerClassName="skeleton-container"
              />{" "}
              {/* Skeleton for icon */}
              <Skeleton
                height={20}
                width={80}
                containerClassName="skeleton-container"
              />{" "}
              {/* Skeleton for text */}
            </SkeletonTheme>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="px-5 md:px-20 grid grid-cols-3 gap-5 md:flex md:items-center md:justify-between m-5 md:w-3/4 md:m-auto">
      {iconsData?.map((item, index) => (
        <Link href={item.deeplink} key={index}>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={item.iconUrl}
              alt={item.iconText}
              width={60}
              height={60}
            />
            <p className="text-sm md:text-md mr-1 text-center text-[#050a4e] font-semibold">
              {item.iconText}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default IconsSection;
