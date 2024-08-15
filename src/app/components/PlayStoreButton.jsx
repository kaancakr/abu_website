import React from "react";
import Image from "next/image";

const PlayStoreButton = () => {
  return (
    <a href="https://example.com" className="mt-4" style={{width: 160}}>
      <div className="flex items-center bg-black text-white rounded-lg shadow-md p-2" style={{height: 55}}>
        <Image src="/assets/playstore.svg" alt="Play Store" width={25} height={25} className="w-8 h-8 mr-3" />
        <div>
          <p className="text-xs" style={{fontFamily: "monospace"}}>Get it on</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </div>
    </a>
  );
};

export default PlayStoreButton;