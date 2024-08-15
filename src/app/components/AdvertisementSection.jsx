import React from "react";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const AdvertisementSection = () => {
  return (
    <div
      className="relative bg-cover bg-center p-8 rounded-3xl fixed-height w-full"
      style={{ backgroundImage: "url('/assets/project-3.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-3xl p-3">
        <h1 className="text-white text-4xl mb-4 text-center font-bold font-mono p-3">
          ABU Chatbot`u şimdi dene!
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <AppStoreButton />
          <PlayStoreButton />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
