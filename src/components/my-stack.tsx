"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import reactJS from "../../public/react.jpg";
import vuejs from "../../public/vue.jpg";
import js from "../../public/js.png";
import typescript from "../../public/typescript.png";
import github from "../../public/github.svg";

const MyStack = () => {
  const components = ["dashboard", "charts", "forms", "tables", "maps"];
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLImageElement>(null);

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

  const card1 = [
    {
      image: reactJS,
      title: "ReactJS",
      color: "bg-lightBlue-500",
      description:
        "A JavaScript library for building user interfaces maintaned by Facebook and community of developers.",
    },
    {
      image: vuejs,
      title: "Vue.js",
      color: "bg-emerald-500",
      description:
        "An open-source Model–view–viewmodel JavaScript framework for building user interfaces.",
    },
  ];
  const card2 = [
    {
      image: js,
      title: "Javascript",
      color: "bg-orange-500",
      description:
        "Object-oriented programming language that conforms to the ECMAScript specification.",
    },
    {
      image: typescript,
      title: "Typescript",
      color: "bg-red-600",
      description:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    },
  ];

  return (
    <section
      id="my-stack"
      className="text-gray-600 bg-blueGray-100 dark:bg-black w-full relative overflow-x-hidden"
    >
      <Image
        alt="github icon"
        src={github}
        className={`hidden md:flex absolute top-0 -right-48 fade-right-section ${
          isVisible && "is-visible"
        }`}
        ref={domRef}
      />
      <div className="container px-5 py-16 md:py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <Image
            alt="github icon"
            src={github}
            className={`flex md:hidden w-1/2 mb-12`}
          />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary-900 dark:text-white">
            🔋 Some of my stack 🔋
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever stack I choose to endeavor, I always make sure to deliver.
            Once you know the logic, the syntax is just a matter of time.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 items-center">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                {card1.map((card, index) => {
                  const { image, title, description, color } = card;
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`shadow-lg rounded-lg text-center p-8 space-y-2 ${color} ${
                        isEven ? "mt-0" : "mt-8"
                      }`}
                    >
                      <Image
                        alt="team"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={image}
                      />
                      <h2 className="text-lg text-white font-medium title-font mb-2">
                        {title}
                      </h2>
                      <p className="leading-relaxed text-base text-white">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                {card2.map((card, index) => {
                  const { image, title, description, color } = card;
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`shadow-lg rounded-lg text-center p-8 space-y-2 ${color} ${
                        isEven ? "mt-0" : "mt-8"
                      }`}
                    >
                      <Image
                        alt="team"
                        className={`shadow-md rounded-full max-w-full w-16 mx-auto bg-white ${
                          isEven ? "p-2" : "p-0"
                        }`}
                        src={image}
                      />
                      <h2 className="text-lg text-white font-medium title-font mb-2">
                        {title}
                      </h2>
                      <p className="leading-relaxed text-base text-white">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-24 md:mt-48">
            <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-white">
              Some of the tech I use...
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              In order to create a great User Experience these are the
              frameworks i mostly use.
            </p>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Also, some components I&apos;ve built over time are
            </p>
            <div className="block pb-6 mx-auto md:mx-0">
              {components.map((component, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2 cursor-pointer"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
