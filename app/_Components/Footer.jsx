"use client";
import React, { useEffect, useState } from "react";

const HealthData = [
  { id: 1, name: "MediBuddy Gold" },
  { id: 2, name: "Book Medicine" },
  { id: 3, name: "Doctor Consultation" },
  { id: 4, name: "Book a Lab test" },
  { id: 5, name: "Covid Essential Items" },
  { id: 6, name: "Surgery Care" },
  { id: 7, name: "Dental" },
  { id: 8, name: "Cancer Care" },
];

const Hospitalization = [
  { id: 1, name: "Locate hospital" },
  { id: 2, name: "eCard" },
  { id: 3, name: "Track claim" },
  { id: 4, name: "FAQs" },
];

const OurPolicies = [
  { id: 1, name: "Terms of Use" },
  { id: 2, name: "Privacy Policy" },
  { id: 3, name: "Grievance Redressal" },
  { id: 4, name: "Cancellation & Refund Policy" },
  { id: 5, name: "Security at MediBuddy" },
];

const About = [
  { id: 1, name: "Overview" },
  { id: 2, name: "Testimonials" },
  { id: 3, name: "Contact" },
  { id: 4, name: "Blog" },
  { id: 5, name: "Careers" },
  { id: 6, name: "Security" },
  { id: 7, name: "Medical Value Travel Facilitator" },
  { id: 8, name: "MediBuddy Beliefs" },
];

const Footer = () => {
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
  return (
    <footer
      className={`${
        isMobile
          ? "bg-[url('/footer_bg_image.svg')]"
          : "bg-[url('/desktop_footer_bg.svg')]"
      } bg-cover w-full md:h-[80vh] p-12 pt-28 md:pt-56 md:p-48 text-white`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold text-md">Health</h4>
          <ul>
            {HealthData.map((item, index) => (
              <li
                key={index}
                className="text-xs font-light py-2 cursor-pointer hover:font-semibold"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-md">Hospitalization</h4>
          <ul>
            {Hospitalization.map((item, index) => (
              <li
                key={index}
                className="text-xs font-light py-2 cursor-pointer hover:font-semibold"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <h4 className="font-bold text-md">Our Policies</h4>
          <ul>
            {OurPolicies.map((item, index) => (
              <li
                key={index}
                className="text-xs font-light py-2 cursor-pointer hover:font-semibold"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-md">ABOUT</h4>
          <ul>
            {About.map((item, index) => (
              <li
                key={index}
                className="text-xs font-light py-2 cursor-pointer hover:font-semibold"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col gap-3 items-start hidden md:flex">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center flex-col w-fit">
              <h4 className="font-medium text-[10px]">DOWNLOAD APP</h4>
              <div className="flex items-center mt-3 gap-1">
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/playstore_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/ios_apply_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col w-fit">
              <h4 className="font-medium text-[9.7px]">FOLLOW US</h4>
              <div className="flex items-center mt-3 gap-1">
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/facebook_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/linkedin_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/twitter_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/blog_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="md:hidden my-3"/>
      <div className="flex-col gap-3 items-center md:hidden flex">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center flex-col w-fit">
              <h4 className="font-medium text-md">DOWNLOAD APP</h4>
              <div className="flex items-center mt-3 gap-1">
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/playstore_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/ios_apply_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col w-fit">
              <h4 className="font-medium text-md">FOLLOW US</h4>
              <div className="flex items-center mt-3 gap-1">
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/facebook_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/linkedin_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/twitter_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="p-2 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src="/blog_icon.svg"
                    alt="playstore icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
