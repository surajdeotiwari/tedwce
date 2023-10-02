import React from "react";
import "../../pagescss/video.css";

const VideoHomepage = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://res.cloudinary.com/dbqg4wpkh/video/upload/v1691864062/TedxOfficial_lvkqq7.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
};

export default VideoHomepage;

// <div className='relative w-full h-screen' >

{
  /* <video src='../HomepageSources/TedxOfficial.mp4' controls width="480" height="300" autoPlay></video> */
}

{
  /* <video  controls autoPlay loop className='w-full h-full object-cover' >
        <source src='https://res.cloudinary.com/dbqg4wpkh/video/upload/v1691864062/TedxOfficial_lvkqq7.mp4' type='video/mp4'></source>
        your browser does not support the video tag
       </video> */
}

// </div>
