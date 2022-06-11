import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, ExternalSidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Product</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Use Cases</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Demo</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ExternalSidebarRoute to="/signin">Join Waitlist</ExternalSidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
