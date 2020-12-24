import React from 'react';
import Divider from '../../../components/divider/divider.component';

import { AboutSectionContainer } from './about-section.styles';

const AboutSection = () => (
  <AboutSectionContainer>
    <h2>About Kewpie</h2>
    <h5>
      Restaurant Kewpie is a Japanese fusion restaurant with elements inspired
      by the French cuisine.
    </h5>
    <h6>Kewpie first opened her doors in 2020 in the center of The Hague.</h6>
    <Divider />
    <div id='lipsum'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
        mauris pellentesque, suscipit urna a, pretium mi. Sed sit amet efficitur
        dolor, quis euismod felis. Donec purus massa, mollis in dictum non,
        euismod sed est. Maecenas a eros sem. Aenean vehicula arcu ipsum, eu
        egestas lectus sollicitudin nec. Maecenas sollicitudin elementum dolor a
        rhoncus. Ut nec condimentum augue, eget condimentum justo. Aenean a
        ligula sem. Proin ullamcorper molestie lectus, molestie aliquam ligula
        egestas vel. Phasellus lacinia a lorem at blandit.
      </p>
      <p>
        Aenean hendrerit aliquam ante ut pellentesque. Suspendisse dictum, massa
        id pretium aliquam, metus ipsum venenatis nunc, quis tempor nulla justo
        laoreet nisi. Morbi eget elementum magna, at gravida lacus. Quisque
        venenatis justo laoreet, sagittis erat sed, aliquam sapien. Sed pharetra
        nisl sodales purus commodo porttitor. Fusce lacinia, libero efficitur
        pellentesque fringilla, orci tellus faucibus mi, vel posuere enim nulla
        mattis ipsum. Morbi faucibus dolor urna, nec convallis nulla egestas ac.
        Nullam dignissim velit in enim iaculis, sed ultrices lectus venenatis.
        Aenean condimentum rutrum elit vitae feugiat.
      </p>
      <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi egestas justo nulla, vitae tristique urna egestas in. Integer eu
        rutrum purus. Nam sodales, nisi eget accumsan bibendum, nisi enim
        viverra tortor, sed consequat est ex eu urna. Sed a est ac velit
        hendrerit efficitur sagittis id sapien. Maecenas a ultrices tellus.
        Maecenas facilisis ac justo nec interdum. Donec blandit lorem sit amet
        felis efficitur, a semper ipsum placerat. Quisque fringilla mi ut rutrum
        feugiat. Aliquam in tempor velit.
      </p>
    </div>
  </AboutSectionContainer>
);

export default AboutSection;
