import React from 'react';
import { ChefContainer, InfoContainer } from './chef.styles';

const Chef = ({ chef }) => (
  <ChefContainer>
    <h3>{chef.name}</h3>
    <img src={chef.image} alt={`This is ${chef.name}`} />
    <InfoContainer>
      <span>Age</span>
      {chef.age}
      <span>Profession</span>
      {chef.profession}
      <span>Known for</span>
      {chef.knownFor}
      <span>Specialties</span>
      <ul>
        {chef.specialties.map((specialty) => (
          <li key={specialty}>{specialty}</li>
        ))}
      </ul>
    </InfoContainer>
  </ChefContainer>
);

export default Chef;
