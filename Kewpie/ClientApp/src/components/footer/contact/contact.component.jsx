import React from 'react';
import {
  ContactContainer,
  RowContainer,
  ImageContainer,
  TextContainer,
} from './contact.styles';

const Contact = () => (
  <ContactContainer>
    <h3>Contact us</h3>
    <a href='tel:+31702670700'>
      <RowContainer>
        <ImageContainer>
          <img src='/images/icons/ic-call.svg' alt='' />
        </ImageContainer>
        <TextContainer>+31702670700</TextContainer>
      </RowContainer>
    </a>
    <a href='mailto:jeefersdev@gmail.com'>
      <RowContainer>
        <ImageContainer>
          <img src='/images/icons/ic-mail.svg' alt='' />
        </ImageContainer>
        <TextContainer>info@kewpie.nl</TextContainer>
      </RowContainer>
    </a>
    <a
      href='https://goo.gl/maps/Sp97PJPGgYNECbFj6'
      target='_blank'
      rel='noreferrer'
    >
      <RowContainer>
        <ImageContainer>
          <img src='/images/icons/ic-place.svg' alt='' />
        </ImageContainer>
        <TextContainer>
          Statenlaan 1 <br />
          2400PJ
          <br />
          The Hague
        </TextContainer>
      </RowContainer>
    </a>
  </ContactContainer>
);

export default Contact;
