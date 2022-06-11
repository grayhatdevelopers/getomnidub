import React from 'react';
import { ExternalButton, Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, buttonTo, img, alt, primary, dark, dark2 }) => {
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
                <BtnWrap>
                  { 
                  buttonTo?.startsWith("https") || buttonTo?.startsWith("http")
                  ?
                  <ExternalButton href={buttonTo} smooth={true} duration={500} spy={true} exact='true' offset={-5} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</ExternalButton>
                  :
                  <Button to={buttonTo} smooth={true} duration={500} spy={true} exact='true' offset={-5} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>

}
                </BtnWrap>
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
