import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to blue/i } );
  expect(button).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables or enables button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change to blue/i });
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
  const button = screen.getByRole('button', { name: /Change to blue/i });
  const checkbox = screen.getByLabelText('Disable button');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
})

