import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './first';

 
test('render hello in the website', () => {
  render(<Home />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

//mock api
    test('to check the number of userdetails', async  () => {
      render(<Home />);
      const count = await screen.findAllByTestId(/user/i);
      expect(count.length).toBe(2);
    });

  test('Whether button is incrementing', async  () => {
    render(<Home />);
    const button = screen.getByRole("button", {name:/increment/i});
    const cntvalue = screen.getByText("0");
    fireEvent.click(button)
     expect(cntvalue.value).not.toBe(0);
  });

  // test('to check 1 user detail is called', async  () => {
  //   render(<Home />);
  //   const linkElement = await screen.findByTestId(/user-199/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test('to check 1 user detail is called', async  () => {
  //   render(<Home />);
  //   const linkElement = await screen.findByTestId("user-144");
  //   expect(linkElement).toBeInTheDocument();
  // });

