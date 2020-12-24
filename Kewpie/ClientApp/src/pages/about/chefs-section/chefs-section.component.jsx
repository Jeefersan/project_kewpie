import React from 'react';
import { ChefsSectionContainer, ChefsContainer } from './chefs-section.styles';
import Divider from '../../../components/divider/divider.component';
import Chef from './chef/chef.component';
import CHEFS_DATA from './chefs-data';

const ChefsSection = () => (
  <ChefsSectionContainer>
    <h2>Meet Our Chefs</h2>
    <Divider />
    <ChefsContainer>
      {CHEFS_DATA.map((chef) => (
        <Chef chef={chef} key={chef.id} />
      ))}
    </ChefsContainer>
  </ChefsSectionContainer>
);

export default ChefsSection;
