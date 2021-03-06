import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { replaceCamelWithSpaces } from './App';


// FUNCTIONAL TESTS 
test('Button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to Midnight Blue/i } );
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to Midnight Blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables or enables button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to Midnight Blue/i });
  const checkbox = screen.getByLabelText('Disable button');

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test('button turns gray when disabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to Midnight Blue/i });
  const checkbox = screen.getByLabelText('Disable button');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
})

// UNIT TESTS
describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('wprls for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
