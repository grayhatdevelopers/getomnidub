import React from 'react';
import Icon1 from '../../images/film-icon.jpeg';
import Icon2 from '../../images/tv-anchor.webp';
import Icon3 from '../../images/calling.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Use Cases</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Film/Drama</ServicesH2>
          <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Broadcast Media</ServicesH2>
          <ServicesP>You can access our platform online anywhere in the world</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Social Media</ServicesH2>
          <ServicesP>Unlock our special membership card and get 5% cashback</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
