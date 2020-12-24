import React from 'react';
import { AboutPageContainer, EmptyContainer } from './about.styles';

import AboutSection from './about-section/about-section.component';
import ChefsSection from './chefs-section/chefs-section.component';

const AboutPage = () => (
  <AboutPageContainer>
    <AboutSection />
    <EmptyContainer />
    <ChefsSection />
  </AboutPageContainer>
);

export default AboutPage;
