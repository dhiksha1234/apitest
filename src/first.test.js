import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './first';

test('render hello in the website', () => {
  render(<Home />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test('to check 1 user detail is called', async  () => {
    render(<Home />);
    const linkElement = await screen.findByTestId(/user-199/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('to check 1 user detail is called', async  () => {
    render(<Home />);
    const linkElement = await screen.findByTestId("user-144");
    expect(linkElement).toBeInTheDocument();
  });

  test('to check the number of userdetails', async  () => {
    render(<Home />);
    const count = await screen.findAllByTestId(/user/i);
    expect(count.length).toBe(200);
  });


