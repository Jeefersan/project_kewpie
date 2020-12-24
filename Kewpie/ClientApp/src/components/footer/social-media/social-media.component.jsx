import React from 'react';

import {
  LogoContainer,
  LogoContainerWrapper,
  SocialMediaContainer,
} from './social-media.styles';

import { ReactComponent as FacebookLogo } from '../../../assets/logo/logo-facebook.svg';
import { ReactComponent as InstagramLogo } from '../../../assets/logo/logo-instagram.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/logo/logo-twitter.svg';
import { ReactComponent as YoutubeLogo } from '../../../assets/logo/logo-youtube.svg';

const SocialMedia = () => (
  <SocialMediaContainer>
    <h3>Keep in touch</h3>
    <LogoContainerWrapper>
      <LogoContainer>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
          <FacebookLogo />
        </a>
      </LogoContainer>
      <LogoContainer>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <InstagramLogo />
        </a>
      </LogoContainer>
      <LogoContainer>
        <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
          <TwitterLogo />
        </a>
      </LogoContainer>
      <LogoContainer>
        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
          <YoutubeLogo />
        </a>
      </LogoContainer>
    </LogoContainerWrapper>
  </SocialMediaContainer>
);

export default SocialMedia;
