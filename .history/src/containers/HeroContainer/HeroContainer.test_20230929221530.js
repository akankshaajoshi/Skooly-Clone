import { screen } from '@testing-library/react';
import HeroContainer from './../HeroContainer';
it('the heading of this content', () => {
  render(<HeroContainer />);
  const buttonValue = screen.getByTestId('join').textContent();
  expect(buttonValue).toEqual('Join now');
});
