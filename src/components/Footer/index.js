import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, 
  // FaYoutube, FaTwitter, 
  FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, ExternalFooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  const logo = "deepdub";

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>DeepDub</FooterLinkTitle>
              <FooterLink to='info'>About</FooterLink>
              <FooterLink to='discover'>Product</FooterLink>
              <FooterLink to='services'>Use Cases</FooterLink>
              <FooterLink to='signup'>Demo</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              {/* <FooterLink to='/'>Investors</FooterLink> */}
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to='#'><a href="tel:+923030559202">+92 303 0559202</a></FooterLink>
              <FooterLink to='#'><a href="mailto:info@grayhat.com.pk">info@grayhat.com.pk</a></FooterLink>
              {/* <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Partners</FooterLinkTitle>
              <ExternalFooterLink href='https://grayhat.com.pk/' target="_blank" >Grayhat Developers</ExternalFooterLink>
              <ExternalFooterLink href='http://isb.nu.edu.pk/aim/' target="_blank" >AIM Lab</ExternalFooterLink>
         
            </FooterLinkItems>

          </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              {logo}
            </SocialLogo>
            <WebsiteRights>{logo} © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/grayhatdevelopers/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/grayhatdevelopers/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink> */}
              <SocialIconLink href='https://pk.linkedin.com/company/grayhatpk' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://www.github.com/grayhatdevelopers' target='_blank' aria-label='Linkedin'>
                <FaGithub />
              </SocialIconLink>              
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
