import React from 'react';
import styled from 'react-emotion';

import { unit } from '../styles';
import { cardClassName, getBackgroundImage } from './launch-tile';
import { InnerContainer } from './footer'

const LaunchDetail = ({ id, isInCart, rocket, mission }) => (
  <Card
    style={{
      backgroundImage: getBackgroundImage(id),
    }}
  >
    <h3>
      {rocket.name} ({rocket.type})
    </h3>
    <pre>{JSON.stringify(rocket)}</pre>
    <h6>in your cart? <strong>{JSON.stringify(isInCart)}</strong></h6>
    <InnerContainer>
      <Img src={mission.missionPatch} alt={mission.name} />
    </InnerContainer>
  </Card>
);

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Card = styled('div')(cardClassName, {
  height: 365,
  marginBottom: unit * 4,
});

const Img = styled('img')({
  display: 'block',
  maxWidth: '6em',
  margin: 'auto'

})
export default LaunchDetail;
