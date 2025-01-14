"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Type the ref

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex text-2xl font-bold items-center">
          <i className="fas fa-thumbs-up mr-2 text-white bg-indigo-600 rounded-full size-10 px-2"></i>
          <p className="text-black-600">Testimonial</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="md:flex hidden space-x-6 py-2 relative">
        {/* Dropdown Menu for Customers */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-gray-600 hover:text-indigo-600 font-bold flex items-center"
          >
            Customers
            <svg
              className={`ml-2 h-5 w-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <Link
                href="/customers/agency"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                Agencies
              </Link>
              <Link
                href="/customers/ecommerce"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                eCommerce & Retail
              </Link>
              <Link
                href="/customers/course-creators"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                Course Creators
              </Link>
              <Link
                href="/customers/b2b"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                B2B Companies
              </Link>
              <Link
                href="/customers/b2c"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                B2C Apps
              </Link>
            </div>
          )}
        </div>

        {/* Other Navigation Links */}
        <Link href="/features" className="text-gray-600 hover:text-indigo-600 font-bold">
          Features
        </Link>
        <Link href="/integration" className="text-gray-600 hover:text-indigo-600 font-bold">
          Integration
        </Link>
        <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 font-bold">
          Pricing
        </Link>

        {/* Language Selector */}
        <div className="md:flex hidden space-x-2">
          <Image
            src="/us.svg"
            alt="English Language"
            className="pb-4"
            height={24}
            width={26}
          />
          <span className="text-gray-700">En</span>
        </div>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-indigo-600">
          Sign in
        </Link>
        <Link
          href="/register"
          className="text-white bg-blue-600 rounded hover:bg-indigo-700 px-4 py-2"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
