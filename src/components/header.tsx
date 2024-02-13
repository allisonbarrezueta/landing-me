"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import myBrand from "../../public/alliBrand.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isChecked]);

  const handleAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <header className="text-gray-600 bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white rounded-full"
          >
            <g filter="url(#filter0_d_19_6)">
              <circle cx="59" cy="55" r="55" fill="#A15373" />
              <circle cx="59" cy="55" r="54.5" stroke="none" />
            </g>
            <path
              d="M46.5333 13.9333C35.078 39.7079 28.6554 54.1587 17.2 79.9333M97.8667 79.9333H58.2667V13.9333L28.9333 79.9333M108.133 69.6667H68.5333V13.9333"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <filter
                id="filter0_d_19_6"
                x="0"
                y="0"
                width="118"
                height="118"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_19_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_19_6"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <span className="ml-3 text-xl text-primary-800">Allison</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            href={"#home"}
            className="mr-5 cursor-pointer hover:text-primary-800"
          >
            Home
          </Link>
          <Link
            href={"#portfolio"}
            className="mr-5 cursor-pointer hover:text-primary-800"
          >
            Portfolio
          </Link>
          <Link
            href={"#my-stack"}
            className="mr-5 cursor-pointer hover:text-primary-800"
          >
            My Stack
          </Link>
          <Link
            href={"#about-me"}
            className="mr-5 cursor-pointer hover:text-primary-800"
          >
            About me
          </Link>
        </nav>

        <div className="flex flex-row items-center mt-4 md:mt-0">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onChange={handleAll}
          />
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
