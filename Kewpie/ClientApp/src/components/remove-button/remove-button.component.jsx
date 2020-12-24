import React from 'react';

import { ButtonContainer } from './remove-button.styles';
import { ReactComponent as Icon } from '../../assets/icons/ic-remove.svg';

const RemoveButton = ({ handleClick }) => (
  <ButtonContainer onClick={handleClick}>
    <Icon />
  </ButtonContainer>
);

export default RemoveButton;
