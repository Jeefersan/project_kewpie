import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenuHidden } from '../../../redux/header/header.selectors';
import { toggleMenuHidden } from '../../../redux/header/header.actions';
import { HamburgerContainer } from './hamburger.styles';
import { ReactComponent as IconOpen } from '.././../../assets/icons/ic-menu-open.svg';
import { ReactComponent as IconClosed } from '.././../../assets/icons/ic-menu-closed.svg';

const Hamburger = () => {
  const dispatch = useDispatch();
  const isMenuHidden = useSelector(selectMenuHidden);

  return (
    <HamburgerContainer onClick={() => dispatch(toggleMenuHidden())}>
      {isMenuHidden ? <IconClosed /> : <IconOpen />}
    </HamburgerContainer>
  );
};

export default Hamburger;
