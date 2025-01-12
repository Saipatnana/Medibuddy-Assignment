"use client";
import React from "react";
import { useDataContext } from "../context/DataContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HealthCheckBengaluruSection = () => {
  const { data } = useDataContext();
  const HealthCheckData = data?.[4]?.props;

  if (!HealthCheckData || HealthCheckData.length === 0) {
    return (
      <div className="flex flex-col items-start justify-center space-y-4 px-5 md:px-20 my-6">
        {/* Skeleton for Heading */}
        <Skeleton width={200} height={30} />

        {/* Skeleton for each health check item */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6">
          {[...Array(6)].map((_, index) => (
        
              <Skeleton width={120} height={150} key={index}/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="px-5 md:px-20 my-6">
      <h1 className="text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold mb-6">
        Book Health Check Packages in Bengaluru
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {HealthCheckData.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={`https://www.medibuddy.in${item.imgSrc}`}
              alt={item.label}
              className="w-full h-auto"
            />
            <p className="text-white text-xl w-3/4 text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthCheckBengaluruSection;
