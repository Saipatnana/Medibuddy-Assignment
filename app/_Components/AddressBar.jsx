import Image from "next/image";
import React from "react";

const AddressBar = () => {
  return (
    <section className="p-2 px-5 md:px-20 bg-blue-300 text-white grid grid-cols-2">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-lg flex justify-center flex-col max-w-fit">
        <div className="flex items-center gap-2 text-base md:text-base font-normal md:font-bold w-fit">
          Billekahalli
          <Image
            src="/Location_GPS_icon_white.svg"
            alt="Location_GPS_icon"
            width={20}
            height={20}
          />
        </div>
        <p className="truncate text-xs hidden md:block md:text-base">
          Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka - 560076
        </p>
      </div>
      <div className="ml-auto flex items-center gap-5">
        <button className="hover:underline">
          About Us
        </button>
        <button className="hover:underline">
          Login
        </button>
      </div>
    </section>
  );
};

export default AddressBar;
