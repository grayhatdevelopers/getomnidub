import React from 'react';

import Video from "../../videos/video.mp4"

// To check the current screen width
import useWindowDimensions from '../../utils/useWindowDimensions';

const FullScreenVideo = ({ watchVideo }) => {
  const { width } = useWindowDimensions();

  return (
      <div style={{ 
          position: 'absolute',
          top: 0,
          height: "100vh",
          width: "100vw",
          zIndex: width < 850 ? 9999 : 2,
      }}>

      <video id="my-video" className={"video-js"} 
    //   style={}
    controls 
    preload="auto"
    autoPlay
    style={{
        objectFit: width < 850 ? "contain" : "cover",
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


