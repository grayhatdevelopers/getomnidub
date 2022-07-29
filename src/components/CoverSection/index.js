import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight, Play, PlayDisabled } from './CoverElements';
import { Button } from '../ButtonElements';
import FullScreenVideo from '../FullScreenVideo';

// To check the current screen width
import useWindowDimensions from '../../utils/useWindowDimensions';

const CoverSection = () => {
  const [hover, setHover] = useState(false);
  const [watchVideo, setWatchVideo] = useState(false);

  const { width } = useWindowDimensions();

  const mobile_cover_content = {
    left: "0",
    alignItems: "center",
  }

  const onHover = () => {
    setHover(!hover);
  };
  
  return (
    <CoverContainer>
      { watchVideo ? 
      <FullScreenVideo watchVideo={watchVideo} />
      :
      <></>  
    }
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent style={width < 850 ? mobile_cover_content : {}}>
        <CoverH1>Videos for everyone.</CoverH1>
        <CoverP style={width < 850 ? {textAlign: 'center'} : {}}>DeepDub translates videos from one language into many others, while preserving the voice of the original actor and synchronizing the lips.</CoverP>
        <div style={{display:"flex", flexDirection: "row"}}>
        <CoverBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
        <CoverBtnWrapper>
        <Button to="#" onClick={()=>{
            setWatchVideo(!watchVideo)
          }} 
          style={{
            marginLeft:"10px"
          }}
          // onMouseEnter={onHover} onMouseLeave={onHover} 
          secondary='true' dark='true'>
            { watchVideo ?
            <><PlayDisabled /> Mute video</>
            :
            <><Play /> Play video</>
          }
          </Button>
        </CoverBtnWrapper>
        </div>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
