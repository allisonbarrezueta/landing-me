import React from "react";

type Props = {};

const Footer = (props: Props) => {
  console.log("123");
  return (
    <footer className="dark:text-white text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first md:justify-evenly">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              Menu
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a
                  href="#home"
                  className="dark:text-white text-gray-600 hover:text-primary-800"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="dark:text-white text-gray-600 hover:text-primary-800"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#my-stack"
                  className="dark:text-white text-gray-600 hover:text-primary-800"
                >
                  My Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="dark:text-white text-gray-600 hover:text-primary-800"
                >
                  About Me
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium dark:text-white text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label className="leading-7 text-sm dark:text-white text-gray-600">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
            <span className="ml-3 text-xl">Allison Barrezueta</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 AB —
            <a
              href="https://twitter.com/AllisonNicoleBM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1 hover:text-blue-500"
            >
              @AllisonNicoleBM
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/allison.barrezueta.1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/AllisonNicoleBM"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/allisonbarrezueta/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/allison-barrezueta-097432131/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
