import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppContainer, GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ReservationPage from './pages/reservation/reservation.component';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '200px',
          width: '100%',
          margin: '28px auto',
        }}
      >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/reservation' component={ReservationPage} />
          <Route path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;
