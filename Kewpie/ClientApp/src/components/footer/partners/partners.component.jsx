import React from 'react';
import {
  PartnersContainer,
  LogoContainerWrapper,
  LogoContainer,
} from './partners.styles';

const Partners = () => (
  <PartnersContainer>
    <h3>Our partners</h3>
    <LogoContainerWrapper>
      <LogoContainer>
        <a href='https://www.thuisbezorgd.nl/' target='_blank' rel='noreferrer'>
          <img alt='Thuisbezorgd logo' src='/images/logo-thuisbezorgd.png' />
        </a>
      </LogoContainer>
      <LogoContainer>
        <a href='https://www.thefork.nl/' target='_blank' rel='noreferrer'>
          <img alt='TheFork logo' src='/images/logo-the-fork.png' />
        </a>
      </LogoContainer>
    </LogoContainerWrapper>
  </PartnersContainer>
);

export default Partners;
