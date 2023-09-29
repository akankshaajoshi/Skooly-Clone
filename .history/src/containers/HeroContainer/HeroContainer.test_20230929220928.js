import { screen } from '@testing-library/react';

it('the heading of this content', () => {
  const buttonValue = screen.getByRole('Button', { name: 'Join now' });
});
