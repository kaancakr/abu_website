import React from "react";
import Image from "next/image"

const AppStoreButton = () => {
  return (
    <a href="https://example.com" className="mt-4" style={{width: 160}}>
      <div className="flex items-center bg-black text-white rounded-lg shadow-md p-2" style={{height: 55}}>
        <Image src="/assets/apple.svg" alt="App Store" width={25} height={25} className="w-8 h-8 mr-3" />
        <div>
          <p className="text-xs" style={{fontFamily: "monospace", fontSize: 10}}>Download on the</p>
          <p className="text-m font-semibold">App Store</p>
        </div>
      </div>
    </a>
  );
};

export default AppStoreButton;