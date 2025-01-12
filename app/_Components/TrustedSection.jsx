"use client";
import React from "react";

const TrustedSection = () => {
  return (
    <section className="md:mx-40 bg-gradient-to-t from-[#e8efff] to-[#edf3fe] md:rounded-[45px] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl md:text-2xl w-fit text-[#050a4e] ">
          Trusted by <span className="gradient-text ">20,00,000+</span>
          <br /> Users Every month
        </h2>
        <img src="/trust_icon.svg" alt="trust icon" width={60} height={60} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-5 text-[#050a4e]">
            <img
              src="/telescope_icon.svg"
              alt="telescope icon"
              className="w-9 h-9"
            />
            <p className="font-medium w-36 text-[11px] md:text-sm">
              <span className="font-bold">200+</span> Approved Diagnostic
              Centres
            </p>
          </div>
          <div className="flex items-center gap-5 text-[#050a4e]">
            <img src="/tubes_icon.svg" alt="tubes icon" className="w-9 h-9" />
            <p className="font-medium w-36 text-[11px] md:text-sm">
              <span className="font-bold">1200+</span> Lab Tests Offered
            </p>
          </div>
          <div className="flex items-center gap-5 text-[#050a4e]">
            <img
              src="/locations_icon.svg"
              alt="locations icon"
              className="w-9 h-9"
            />
            <p className="font-medium w-36 text-[11px] md:text-sm">
              <span className="font-bold">1200+</span> Pincodes Covered
            </p>
          </div>
          <div className="flex items-center gap-5 text-[#050a4e]">
            <img src="/doctor_icon.svg" alt="doctor icon" className="w-9 h-9" />
            <p className="font-medium w-36 text-[11px] md:text-sm">
              Verified Experts for Diagnosis
            </p>
          </div>
        </div>
      </div>
      <h3 className="my-6 text-xl text-[#050a4e]">
        100% Safe & Secure Lab Tests
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-2xl shadow-md p-5 bg-white flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
          <img src="/test_icon.svg" alt="test icon" className="w-14 h-14" />
          <p className="text-sm md:text-xl">Govt. Approved <br/>Diagnostic Centres</p>
        </div>
        <div className="border rounded-2xl shadow-md p-5 bg-white flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
          <img src="/temperature_icon.svg" alt="test icon" className="w-14 h-14" />
          <p className="text-sm md:text-xl">Daily Temperature <br/>Check of all Technicians</p>
        </div>
        <div className="border rounded-2xl shadow-md p-5 bg-white flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
          <img src="/sanitize_icon.svg" alt="test icon" className="w-14 h-14" />
          <p className="text-sm md:text-xl">Mandatory use of Mask <br/>& Sanitizers</p>
        </div>
        <div className="border rounded-2xl shadow-md p-5 bg-white flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
          <img src="/spray_icon.svg" alt="test icon" className="w-14 h-14" />
          <p className="text-sm md:text-xl">Regular Disinfectation<br/>of Labs</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
