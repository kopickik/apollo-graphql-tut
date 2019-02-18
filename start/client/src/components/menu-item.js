import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';
import { colors, unit } from '../styles';

export const menuItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontSize: 20,
  fontWeight: 100,
  fontFamily: 'Courier New, monospace',
  color: colors.secondary,
  textTransform: 'uppercase',
  textAlign: 'center',
  transition: 'all 0.2s ease-in-out',
  svg: {
    display: 'block',
    width: 60,
    margin: `0 auto ${unit}px`,
    fill: colors.secondary,
    transition: 'fill 0.2s ease-in-out'
  },
  "svg:hover": {
    cursor: 'pointer',
    fill: colors.textSecondary,
    transition: 'fill 0.2s ease-in-out'
  },
  "&:hover": {
    cursor: 'pointer',
    color: colors.textSecondary,
    fontWeight: 700,
    transition: 'all 0.2s ease-in-out'
  }
});

const MenuItem = styled(Link)(menuItemClassName, {
  textDecoration: 'none',
});

export default MenuItem;
