"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import me from "../../public/me.png";

type Props = {};

const Introduction = (props: Props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
    <section className="w-full bg-gradient-to-b from-[#A15373] to-[rgba(238, 21, 110, 0.15)]">
      <div className="flex-col justify-evenly items-center md:flex-row flex container mx-auto min-h-screen p-20">
        <span
          className={`flex flex-col space-y-3 w-2/3 justify-center fade-left-section-intro ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
          <h1 className="text-5xl text-center md:text-left md:text-7xl text-primary-800 dark:text-white font-bold">
            Hello!
          </h1>
          <h1 className="text-5xl text-center md:text-left md:text-7xl text-primary-800 dark:text-white font-bold">
            I&apos;m Allison
          </h1>
          <h1 className="text-5xl text-center md:text-left md:text-7xl text-primary-800 dark:text-white font-bold">
            a Web Developer
          </h1>
        </span>
        <Image
          alt="This is me"
          priority
          src={me}
          className={`w-full h-auto md:w-1/2 md:h-1/2 rounded-full order-first md:order-last shadow-md fade-right-section-intro ${
            isVisible ? "is-visible" : ""
          }`}
          ref={imageRef}
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Introduction;
