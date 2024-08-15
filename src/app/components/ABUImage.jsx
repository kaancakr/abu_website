import React from "react";
import Image from "next/image";

const ABUImage = () => {
  return (
    <div className="text-center flex items-center justify-center mt-20">
      <div className="relative w-full max-w-screen-lg h-auto aspect-w-16 aspect-h-9">
        <Image
          src="/assets/abu_drawing.png"
          layout="fill"
          objectFit="contain"
          alt="Picture of the text"
          className="ml-10"
        />
      </div>
    </div>
  );
};

export default ABUImage;
