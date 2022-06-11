import React from 'react';
import { ExternalButton, Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttons, img, alt, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <div style={{display:"flex", flexDirection:"row"}}>
                {
                  buttons && buttons.map((button, idx) => {
                    return (
                      <BtnWrap style={{marginRight: "8px"}}>
                    { 
                    button.buttonTo?.startsWith("https") || button.buttonTo?.startsWith("http")
                    ?
                    <ExternalButton target={button.target} href={button.buttonTo} smooth={true} duration={500} spy={true} exact='true' offset={5} primary={button.primary ? 1 : 0} dark={button.dark ? 1 : 0} dark2={button.dark2 ? 1 : 0}>
                      {button.icon ?
                      <FontAwesomeIcon icon="fas fa-play" />
                    :
                    <></>  
                    }
                      {button.buttonLabel}
                      </ExternalButton>
                    :
                    <Button to={button.buttonTo} smooth={true} duration={500} spy={true} exact='true' offset={5} primary={button.primary ? 1 : 0} dark={button.dark ? 1 : 0} dark2={button.dark2 ? 1 : 0}>
                                            {button.icon ?
                    <FontAwesomeIcon className={button.icon} />
                    :
                    <></>  
                    }
                      {button.buttonLabel}
                      </Button>  
                    }
                    </BtnWrap>
                    )
                  })
                }                
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
