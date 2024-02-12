import React from "react";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#A15373] to-[rgba(238, 21, 110, 0.15)]">
      <div className="flex flex-col container mx-auto min-h-screen p-24">
        <span className="space-y-3 w-2/3">
          <h1 className="text-7xl text-white font-bold">Hello</h1>
          <h1 className="text-7xl text-white font-bold">I&apos;m Allison</h1>
          <h1 className="text-7xl text-white font-bold">a Web Developer</h1>
        </span>
      </div>
    </section>
  );
};

export default Introduction;
