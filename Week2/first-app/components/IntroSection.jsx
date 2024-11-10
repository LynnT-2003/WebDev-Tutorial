import React from "react";

const IntroSection = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-full h-full px-24 flex flex-col items-center justify-center">
        <p className="text-center text-2xl">Hello, my name is Lynn.</p>
        <br />
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aspernatur, cumque labore nemo quos voluptates. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam aspernatur, cumque labore
          nemo quos voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam aspernatur, cumque labore nemo quos
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam aspernatur, cumque labore nemo quos voluptates.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src="/profile/lynn_profile.png" className="w-[600px] h-[600px]" />
      </div>
    </div>
  );
};

export default IntroSection;
