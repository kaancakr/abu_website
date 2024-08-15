import React, { useEffect, useState } from "react";

const messages = [
  "Hello World!",
  "Welcome to the site!",
  "Enjoy your stay!",
  "Don't forget to subscribe!",
];

const getRandomPosition = () => {
  const top = Math.floor(Math.random() * 80) + "%";
  const left = Math.floor(Math.random() * 80) + "%";
  return { top, left };
};

const AnimatedMessages = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = messages.map(() => getRandomPosition());
    setPositions(newPositions);
  }, []);

  return (
    <div className="relative w-full h-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className="absolute text-slate-400 text-2xl animate-pulse font-mono font-bold"
          style={positions[index]}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default AnimatedMessages;
