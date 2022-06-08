import React from 'react';

import Video from "../../videos/video.mp4"

const FullScreenVideo = ({ watchVideo }) => {
  return (
      <div style={{ 
          position: 'absolute',
          height: "100vh",
          width: "100vw",
          zIndex: 2,
      }}>

      <video id="my-video" className={"video-js"} 
    //   style={}
    controls 
    preload="auto"
    autoPlay
    style={{
        objectFit:"cover"
    }} 
    poster="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-5468d589f84e.gif" 
    //   dataSetup='' 
    loop>
          <source 
          src={Video} 
          type='video/mp4' 
          />
      </video>  
          </div>
);
};

export default FullScreenVideo;


