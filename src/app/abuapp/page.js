"use client";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import Navbar from "../components/Navbar";
import GridLayout from "../components/GridLayout";
import OpeningText from "../components/OpeningText";
import Footer from "../components/Footer";
import ABUImage from "../components/ABUImage";
import ImageCarousel from "../components/Carousel";

const ABUApp = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure the canvas is behind other elements
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div style={{ zIndex: 2, position: "relative", width: "100%" }}>
        <Navbar />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          marginTop: 50,
        }}
      >
        <OpeningText />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          marginTop: 50,
        }}
      >
        <GridLayout />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          marginTop: 100,
        }}
      >
        <ABUImage />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          marginTop: 50,
        }}
      >
        <ImageCarousel />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          marginTop: 200,
        }}
      >
        <Footer />
      </div>
    </main>
  );
};

export default ABUApp;
