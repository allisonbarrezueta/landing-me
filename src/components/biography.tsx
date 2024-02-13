"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import triangle from "../../public/PolygonWhite.svg";
import triangleDark from "../../public/PolygonDark.svg";
import jumpingme from "../../public/jumpl.svg";

type Props = {};

const Biography = (props: Props) => {
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
    <section id="about-me" className="pb-16 relative pt-32 w-full">
      <div className="top-0 bottom-auto left-0 right-0 w-full absolute text-white dark:text-black">
        <Image
          src={triangle}
          alt="decor triangle"
          className="absolute bottom-0 overflow-hidden w-full dark:hidden"
          fill={false}
        />
        <Image
          src={triangleDark}
          alt="decor triangle"
          className="absolute bottom-0 overflow-hidden w-full hidden dark:flex"
          fill={false}
        />
      </div>
      <div className="container mx-auto">
        <h1 className="sm:text-4xl text-2xl text-center capitalize font-medium title-font mb-2 text-primary-900 dark:text-white">
          A little more of myself
        </h1>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="w-1/3">
          <p className="dark:text-white text-primary-800 text-2xl text-right leading-10">
            Hey there! I&apos;m Allison Barrezueta, a frontend developer
            passionate about crafting immersive user experiences. With a
            Bachelor&apos;s degree in Computer Science and Economics from [Your
            University], I&apos;ve honed my skills in HTML5, CSS3, JavaScript
            (ES6+), and frameworks like React.js.{" "}
          </p>
        </div>
        <div className="w-1/3">
          <Image alt="jumping me" src={jumpingme} className="floating" />
        </div>
        <div className="w-1/3">
          <p className="dark:text-white text-primary-800 text-2xl leading-10">
            My projects often feature dynamic dashboards, interactive charts,
            and responsive layouts, reflecting my commitment to delivering
            exceptional user experiences. What sets me apart is not just my
            technical expertise, but also my strong communication skills.
          </p>
        </div>
      </div>
      <div
        className={`container mx-auto fade-in-section ${
          isVisible ? "is-visible" : ""
        }`}
        ref={domRef}
      >
        <h1
          className={`sm:text-3xl text-xl text-center capitalize font-medium title-font mb-2 text-primary-500 dark:text-white italic`}
        >
          &quot;Once you know the logic, the rest is just syntax&quot;
        </h1>
        <h2 className={`text-primary-500/85 text-center text-lg sm:text-2xl`}>
          -AB
        </h2>
      </div>
    </section>
  );
};

export default Biography;
