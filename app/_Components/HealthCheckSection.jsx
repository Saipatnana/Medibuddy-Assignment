"use client";
import React from "react";
import { useDataContext } from "../context/DataContext";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

const HealthCheckSection = () => {
  const { data } = useDataContext();
  const HealthCheckData = data?.[3]?.props;

  // Show Skeleton loader if data is not available
  if (!HealthCheckData || HealthCheckData.length === 0) {
    return (
      <div className="flex flex-col items-start justify-center space-y-4 px-5 md:px-20 my-6">
        {/* Skeleton for Heading */}
        <Skeleton width={200} height={30} />

        {/* Skeleton for each health check item */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-2 border-2 shadow-sm rounded-2xl p-3"
            >
              <Skeleton circle={true} width={80} height={80} /> {/* Circle skeleton for image */}
              <Skeleton width={60} height={20} /> {/* Skeleton for title */}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="px-5 md:px-20 my-6">
      {/* Heading */}
      <h1 className="text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold mb-6">
        LifeStyle Health Check Packages
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6">
        {HealthCheckData.map((item, index) => (
          <div
            className="flex items-center justify-center flex-col gap-2 border-2 shadow-sm rounded-2xl p-3"
            key={index}
          >
            <img
              src={`https://www.medibuddy.in/${item.imgSrc}`}
              alt={item.title}
              className="w-20"
            />
            <h3 className="text-[#050A4E] text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthCheckSection;
