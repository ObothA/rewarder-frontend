import React from 'react';
import { render, screen } from '@testing-library/react';

import Rewarder from './Rewarder';

test('renders learn react link', () => {
  render(<Rewarder />);
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();

  const sampleCsvImage = screen.getByRole('img');
  expect(sampleCsvImage).toBeInTheDocument();
});
