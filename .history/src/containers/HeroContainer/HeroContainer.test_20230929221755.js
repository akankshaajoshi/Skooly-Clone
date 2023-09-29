import { render, screen } from '@testing-library/react';
import HeroContainer from './index.js';

it('the heading of this content', () => {
  render(<HeroContainer />);
  const buttonValue = screen.getByTestId('join').textContent();
  expect(buttonValue).toEqual('Join now');
});
