import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "90vh",
        background: `url('/Puppy_day25.png') no-repeat center center`,
        backgroundSize: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 50,
          fontSize: "2rem",
          color: "white",
          marginTop: "-100px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize:"18px"
        }}
      >
        下滑和礼物大使们打招呼
      </div>
    </div>
  );
};

export default HeroSection;
