"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const MyPortfolio = (props: Props) => {
  return (
    <section
      id="portfolio"
      className="text-gray-600 bg-[#4a5567] w-full relative"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            My work speaking from itself 💼
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white/55">
            In my portfolio, you&apos;ll discover projects showcasing my
            frontend prowess. From intricate styling to robust login systems,
            each project is crafted with user experiences. Dynamic dashboards
            and insightful charts offer real-time data visualization. Responsive
            tables ensure efficient data organization, enhancing overall
            usability.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://dummyimage.com/500x300"
                width={200}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://dummyimage.com/501x301"
                width={200}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src="https://dummyimage.com/600x360"
                width={200}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src="https://dummyimage.com/601x361"
                width={200}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://dummyimage.com/502x302"
                width={200}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://dummyimage.com/503x303"
                width={200}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
