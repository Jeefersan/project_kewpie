import React from 'react';

import SocialMedia from './social-media/social-media.component';
import Partners from './partners/partners.component';
import Contact from './contact/contact.component';
import {
  FooterContainer,
  FooterWrapper,
  CopyrightContainer,
} from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Contact />
      <SocialMedia />
      <Partners />
    </FooterWrapper>
    <CopyrightContainer>
      Copyright &copy; {new Date().getFullYear()}{' '}
      <a href='https://github.com/Jeefersan/'>Jeefersan</a>. All Rights Reserved
    </CopyrightContainer>
  </FooterContainer>
);

export default Footer;
