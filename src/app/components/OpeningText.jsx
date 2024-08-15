import React from "react";
import Image from "next/image";

const OpeningText = () => {
  return (
    <div className="text-center flex items-center justify-center mt-20">
      <div className="w-full max-w-screen-lg h-auto px-4 sm:px-6">
        <Image
          src="/assets/text.png"
          alt="Picture of the text"
          layout="responsive"
          width={800}
          height={800}
          className="md:ml-10"
          priority
        />
      </div>
    </div>
  );
};

export default OpeningText;
