import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const [showNames, setShowNames] = useState(false);

  const toggleNames = () => {
    setShowNames(!showNames);
  };

  const openLinkedInKaan = () => {
    window.open("https://www.linkedin.com/in/eren-kaan-%C3%A7ak%C4%B1r-0b4312229/", "_blank");
  };

  const openLinkedInOnat = () => {
    window.open("https://www.linkedin.com/in/onat-karabulut/", "_blank");
  };

  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-8 flex justify-between">
        {showNames ? (
          <span className="font-mono font-bold text-xl flex items-center cursor-pointer">
            <div>
              This website made by
              <span className="ml-3 mr-3 hover:text-blue-700" onClick={openLinkedInKaan}>Eren Kaan Çakır</span>
              and
              <span className="ml-3 hover:text-blue-700" onClick={openLinkedInOnat}>Onat Karabulut</span>
            </div>{" "}
            <FaArrowLeft onClick={toggleNames} className="ml-2" />
          </span>
        ) : (
          <span
            className="font-mono font-bold text-xl flex items-center cursor-pointer"
            onClick={toggleNames}
          >
            This website made by <FaArrowRight className="ml-2" />
          </span>
        )}
        <p className="text-white font-mono font-bold text-l">
          All rights reserved © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;