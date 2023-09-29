import { screen } from '@testing-library/react';

it('the heading of this content', () => {
  const buttonValue = screen.getByTestId('join').textContent;
  expect(buttonValue).toBe('Join now');
});
