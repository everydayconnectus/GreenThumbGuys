import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('navigation links', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText("Home");
  const aboutElement = getByText("About Us");
  const servicesElement = getByText("Services");
  const joinElement = getByText("Join / Login");
  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(servicesElement).toBeInTheDocument();
  expect(joinElement).toBeInTheDocument();
  //screen.debug();
});
