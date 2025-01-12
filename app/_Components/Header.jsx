"use client"
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-3 px-5 md:px-20 border shadow-md sticky top-0 bg-white z-[1001]">
      <img src="/logo.svg" alt="Logo" width={150} height={150} />
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
        >
          <img
            src="/Wallet_icon.svg"
            alt="wallet icon"
            width={40}
            height={40}
          />
          <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] font-bold rounded-full bg-blue-300 absolute top-0 left-5 md:left-8 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[4px] md:px-[5px]">
            4529
          </div>
        </Link>
        <Link
          href="/"
          className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
        >
          <img src="/Cart_icon.svg" alt="wallet icon" width={40} height={40} />
          <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] font-bold rounded-full bg-[#156DDC] absolute top-0 left-5 md:left-8 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
            1
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
