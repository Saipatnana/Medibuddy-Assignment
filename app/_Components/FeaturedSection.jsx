"use client"
import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";
import { Plus, Minus } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "react-loading-skeleton";

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
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FeaturedSection = () => {
  const { data } = useDataContext();
  const [counter, setCounter] = useState(0);
  const FeaturedData = data?.[2]?.props[0].packages;
  const categoriesData = data?.[2]?.categories?.["10386"];

  // Handle increment
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  // Handle decrement
  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (!FeaturedData || FeaturedData.length === 0 || !categoriesData) {
    return (
      <div className="px-5 md:px-20 py-5">
        <div className="flex items-start justify-between mb-5">
          <Skeleton width={200} height={30} />{" "}
          {/* Skeleton loader for section title */}
          <Skeleton width={80} height={20} />{" "}
          {/* Skeleton loader for "View All" button */}
        </div>

        {/* Categories Skeleton Loader */}
        <div className="my-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-4">
            <Skeleton width={100} height={30} />{" "}
            {/* Skeleton loader for category buttons */}
            <Skeleton width={100} height={30} />
            <Skeleton width={100} height={30} />
          </div>
        </div>

        {/* Carousel Skeleton Loader */}
        <Carousel responsive={responsive} arrows={true} itemClass="p-2">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                className="w-full h-[370px] border rounded-lg shadow-sm bg-white text-[#050a4e] flex flex-col justify-between "
                key={index}
              >
                <div className="p-5">
                  <Skeleton width={200} height={20} />{" "}
                  {/* Skeleton loader for package name */}
                  <div className="flex items-center text-[#1778F2] mt-1">
                    <Skeleton width={150} height={15} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="flex flex-col items-start">
                      <Skeleton width={100} height={15} />
                      <Skeleton count={3} width={100} height={15} />
                    </div>
                    <div>
                      <Skeleton width={100} height={15} />
                      <Skeleton width={100} height={15} />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mt-2 grid grid-cols-2 gap-5">
                    <Skeleton width={80} height={15} />
                    <Skeleton width={100} height={15} />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Skeleton width={80} height={20} />
                    <Skeleton width={50} height={20} />
                  </div>
                </div>

                <div className=" text-white text-center rounded-b-lg text-sm py-1">
                  <Skeleton width={150} height={15} />
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }

  return (
    <section className="px-5 md:px-20 bg-blue-100 py-5">
      <div className="flex items-start justify-between">
        <h1 className="text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold">
          Featured Health Check-up Packages
        </h1>
        <button className="text-blue-300 text-md md:text-xl">View All</button>
      </div>
      <div className="my-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-4">
          {categoriesData?.map((item, index) => (
            <button
              key={index}
              className="bg-white rounded-lg py-2 px-3 min-w-fit inline-block"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Carousel Section */}
      <Carousel responsive={responsive} arrows={true} itemClass="p-2">
        {FeaturedData?.map((item, index) => (
          <div
            className="w-full h-[370px] border rounded-lg shadow-sm bg-white text-[#050a4e] flex flex-col justify-between "
            key={index}
          >
            <div className="p-5">
              <h2 className="text-lg font-semibold">
                {item.packageDisplayName}
              </h2>
              <div className="flex items-center text-[#1778F2] mt-1">
                <img src="/timmer_icon.svg" alt="Timer Icon" />
                <p className="text-base ml-2 font-normal">
                  {item.reportsTatText}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="flex flex-col items-start">
                  <h3 className="text-md text-[#050a4e] font-semibold">
                    {item.testCount} Test
                  </h3>
                  <ul className="text-xs list-disc text-gray-600 ml-5">
                    {item.testsSummary.map((test, idx) => (
                      <li key={idx}>{test}</li>
                    ))}
                  </ul>
                </div>
                {item.isRadiologyIncluded && (
                  <div>
                    <h3 className="text-md text-[#050a4e] font-semibold">
                      Includes
                    </h3>
                    <div className="flex items-center gap-1">
                      <img src="/radiology_icon.svg" alt="Radiology Icon" />
                      <p className="text-xs text-gray-600">Radiology</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/consultation_icon.svg" alt="Radiology Icon" />
                      <p className="text-xs text-gray-600">
                        {item.consultationCount} Consultations
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-gray-100 rounded-lg p-2 mt-2 grid grid-cols-2 gap-5">
                <div>
                  <h4 className="text-sm text-[#050a4e] font-medium">
                    Fasting
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold mt-1">
                    {item.fastingHoursText}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-[#050a4e] font-medium">
                    Available at
                  </h4>
                  {item.isHomeSampleAvailable ? (
                    <div className="flex items-center gap-1 mt-1">
                      <img src="/home_icon.svg" alt="Home Icon" width={10} />
                      <p className="text-gray-600 text-xs font-semibold">
                        Home
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 mt-1">
                      <img src="/lab_icon.svg" alt="Home Icon" width={10} />
                      <p className="text-gray-600 text-xs font-semibold">Lab</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h1 className="text-md md:text-2xl text-[#050a4e] font-bold">
                  ₹ {item.price}
                </h1>
                <div className="border border-blue-400 rounded-xl flex items-center gap-4 px-3 py-1">
                  <button
                    onClick={handleDecrement}
                    className="text-blue-300 font-bold text-xl"
                  >
                    <Minus size={15} strokeWidth={"4px"} />
                  </button>
                  <p className="text-blue-300 text-lg font-bold">{counter}</p>
                  <button
                    onClick={handleIncrement}
                    className="text-blue-300 font-bold text-xl"
                  >
                    <Plus size={15} strokeWidth={"4px"} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-400 text-white text-center rounded-b-lg text-sm py-1">
              <p>Hurry! Flat 5% Off</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedSection;
