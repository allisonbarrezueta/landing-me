"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import espol from "../../public/espol.png";
import ipac from "../../public/ipac.png";
import ucsg from "../../public/ucsg.png";

type Props = {};

const AboutMe = (props: Props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;

    currentRef && observer.observe(currentRef);

    return () => {
      currentRef && observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="about-me"
      className="text-gray-600 w-full bg-gradient-to-t from-[#A15373] to-[rgba(238, 21, 110, 0.15)]"
    >
      <div className={`container px-5 py-24 mx-auto`}>
        <h1 className="text-primary-800 dark:text-white text-center text-4xl md:text-right my-3">
          My Education Background 👩🏻‍🎓
        </h1>
        <div
          className={`flex flex-col md:flex-row md:flex-wrap -m-4 fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
          <div className="p-4 lg:w-1/3 hover:scale-110 ease-in-out delay-100 duration-200">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden items-center text-center relative">
              <Image
                src={ipac}
                alt="ipac"
                className="rounded-full w-20 self-center mx-auto my-5"
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                HIGH SCHOOL
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                IPAC
              </h1>
              <p className="leading-relaxed mb-3">Guayaquil, Ec</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 hover:scale-110 ease-in-out delay-100 duration-200">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
              <Image
                src={espol}
                alt="espol"
                className="rounded-full w-20 self-center mx-auto my-5"
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                UNIVERSITY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                ESPOL
              </h1>
              <p className="leading-relaxed mb-3">Computer Science Engineer</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 hover:scale-110 ease-in-out delay-100 duration-200">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
              <Image
                src={ucsg}
                alt="ucsg"
                className="rounded-full w-20 self-center mx-auto my-5"
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                UNIVERSITY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                UCSG
              </h1>
              <p className="leading-relaxed mb-3">Economist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
