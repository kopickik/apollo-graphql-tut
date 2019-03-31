import React from 'react';
import styled from 'react-emotion';

import { unit } from '../styles';
import { cardClassName, getBackgroundImage } from './launch-tile';

const LaunchDetail = ({ id, isInCart, rocket, mission, isBooked }) => (
  <Card
    style={{
      backgroundImage: getBackgroundImage(id),
    }}
  >
    <h3>
      {rocket.name} ({rocket.type})
    </h3>
    <h6>in your cart? <strong>{JSON.stringify(isInCart)}</strong></h6>
    <h6>booked? <strong>{JSON.stringify(isBooked)}</strong></h6>
    <Flexarea>
      <Img src={mission.missionPatch} alt={mission.name} />
    </Flexarea>
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
  maxWidth: '6em',
  alignSelf: 'flex-end'
})

const Flexarea = styled('div')({
  display: 'flex',
  height: 275,
  justifyContent: 'flex-end'
})
export default LaunchDetail;
