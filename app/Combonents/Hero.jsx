"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Input Validation: Check if the search term is empty
    if (searchTerm.trim() === "") {
      alert("يرجى إدخال نص للبحث عنه.");
      return;
    }

    // Placeholder for a successful submission
    alert(`تم البحث عن: ${searchTerm}`);
  };

  return (
    <div className="relative h-[450px]">
      <Image
        src="/campus-bg.jpg"
        alt="Background of the university campus"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          مركز المساعدة جامعة طرابلس
        </h1>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-2xl relative"
        >
          <input
            type="search"
            placeholder="البحث..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-14 rounded-full text-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition bg-white"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2"
            aria-label="Search"
          >
            <svg
              className="h-6 w-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
