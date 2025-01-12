"use client";
import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const QuestionsSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { data } = useDataContext();
  const questionsData = data?.[6]?.props;

  if (!questionsData || questionsData.length === 0) {
    return (
      <div className="px-5 md:px-20 my-6">
        <h1 className="text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-3 border m-3 rounded-xl shadow-md">
              <div className="flex items-center gap-2">
                <Skeleton circle height={40} width={40} />
                <Skeleton height={20} width="60%" />
              </div>
              <Skeleton height={10} width="80%" count={2} className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const filteredQuestionsData = questionsData.slice(1);

  return (
    <section className="px-5 md:px-20 my-6">
      <div className="flex items-start justify-between">
        <h1 className="text-md md:text-2xl text-[#050a4e] font-bold md:font-semibold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto mx-1 md:mx-20">
        {filteredQuestionsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 justify-between border m-3 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 w-11/12">
                <img
                  src={`https://www.medibuddy.in/${item.icon}`}
                  className="w-10"
                  onError={(e) => (e.target.src = "/default_icon.svg")}
                  alt="icon"
                />
                <p className="hover:underline cursor-pointer">
                  {item.question}
                </p>
              </div>
              <button
                onClick={() => toggleDropdown(index)}
                aria-expanded={activeDropdown === index}
              >
                {activeDropdown === index ? (
                  <img src="/minus_icon.svg" alt="Collapse" />
                ) : (
                  <img src="/plus_icon.svg" alt="Expand" />
                )}
              </button>
            </div>

            {activeDropdown === index && (
              <div className="self-start m-4 md:ml-4 md:m-0">
                <p className="text-sm">{item.answer}</p>
                <ul className="list-disc ml-5">
                  {Array.isArray(item.points) &&
                    item.points.map((point, idx) => (
                      <li key={idx} className="text-sm">
                        {point.pnt}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionsSection;
