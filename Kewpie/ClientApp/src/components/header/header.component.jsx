import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenuHidden } from '../../redux/header/header.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { setMenuHidden } from '../../redux/header/header.actions';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Hamburger from './hamburger/hamburger.component';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  StyledLink,
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const cartHidden = useSelector(selectCartHidden);
  const isMenuHidden = useSelector(selectMenuHidden);

  const closeMenu = () => {
    if (!isMenuHidden) {
      dispatch(setMenuHidden());
    }
  };

  return (
    <HeaderContainer>
      <Hamburger />
      <LinksContainer isMenuHidden={isMenuHidden}>
        {!isMenuHidden ? (
          <StyledLink onClick={closeMenu} to='/'>
            HOME
          </StyledLink>
        ) : (
          <LogoContainer>
            <Link to='/'>
              <Logo />
            </Link>
          </LogoContainer>
        )}

        <StyledLink onClick={closeMenu} to='/shop'>
          SHOP
        </StyledLink>
        <StyledLink onClick={closeMenu} to='/about'>
          ABOUT
        </StyledLink>
        <StyledLink onClick={closeMenu} to='/reservation'>
          RESERVATION
        </StyledLink>
      </LinksContainer>
      <CartIcon />

      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
