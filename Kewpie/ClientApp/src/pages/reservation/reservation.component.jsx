import React from 'react';
import { Link } from 'react-router-dom';

import { ReservationPageContainer, RulesContainer } from './reservation.styles';

const ReservationPage = () => (
  <ReservationPageContainer>
    <h2>Temporary no reservations</h2>
    <p>
      Due to new measures of the Dutch government against the COVID-19 pandemic,
      we are forced to close our doors for dining until further notice. Takeaway
      or delivery is still possible through our <Link to='/shop'>shop</Link>.
    </p>
    See below the new rules for stores:
    <RulesContainer>
      <h3>Regels voor winkels en uitgaan</h3>
      <ul>
        <li>Theaters en bioscopen zijn dicht.</li>
        <li>
          Kappers, schoonheidsspecialisten, nagelstudio’s en seksinrichtingen
          zijn dicht.
        </li>
        <li>Tattooshops en nagelstudio’s zijn dicht.</li>
        <li>Sauna’s en casino’s zijn dicht.</li>
        <li>Hotels zijn open om te overnachten.</li>
        <li>De restaurants in hotels zijn dicht.</li>
        <li>De meeste winkels zijn dicht.</li>
        <li>
          Supermarkten zijn open. Ook de bakker, de slager en andere winkels
          voor eten en drinken zijn open.
        </li>
        <li>
          Drogisterijen, apotheken, opticiens, audiciens en winkels voor
          reparatie en onderhoud mogen ook open blijven.
        </li>
        <li>Doe-het-zelfzaken zijn open voor afhaal.</li>
        <li>
          Plekken waar u pakketten kunt ophalen en versturen mogen open blijven.
        </li>
        <li>Banken blijven open.</li>
        <li>Overheidsorganisaties blijven open.</li>
        <li>Bibliotheken blijven open om boeken af te halen.</li>
      </ul>
      <span>
        source:{' '}
        <a
          href='https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19/vraag-en-antwoord/toespraak-14-december-in-eenvoudige-taal'
          target='_blank'
          rel='noreferrer'
        >
          Rijksoverheid
        </a>
      </span>
    </RulesContainer>
  </ReservationPageContainer>
);

export default ReservationPage;
