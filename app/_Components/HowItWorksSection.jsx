"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDataContext } from "../context/DataContext";

const HowItWorksSection = () => {
  const { data } = useDataContext();
  const questionsData = data?.[6]?.props[0]?.points;
  console.log(questionsData);

  if (!questionsData || questionsData.length === 0) {
    return (
      <section className="px-5 md:px-20 my-10">
        <div className="flex items-start justify-center text-center mb-5">
          <Skeleton width={400} height={30} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Skeleton circle width={56} height={56} />
                <Skeleton width={150} height={20} />
              </div>
            ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 md:px-20 my-10">
      <div className="flex items-start justify-center text-center">
        <h1 className="text-xl md:text-2xl text-[#050a4e] font-bold md:font-semibold">
          How it Works?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        {questionsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={`https://www.medibuddy.in${item.img}`}
              alt="Step illustration"
              className="w-14 h-14"
            />
            <p className="text-center">{item.pnt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
