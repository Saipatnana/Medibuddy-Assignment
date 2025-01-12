"use client";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState(""); // Fixing the typo

  return (
    <div className="px-5 md:px-40">
      <div className="flex items-center justify-between p-2 px-4 py-3 border-2 rounded-xl my-2 ">
        <input
          placeholder="Find lab tests, diagnostics centres"
          value={search} // Ensure the input value is consistent
          onChange={(e) => setSearch(e.target.value)} // Corrected typo here
          spellCheck="false" // Set spellcheck attribute
          data-ms-editor="true" // Set data-ms-editor attribute if needed
          className="w-full outline-none"
        />
        <Image
          src="/search_icon.svg"
          alt="search icon"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
