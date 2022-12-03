import React from "react";
import Counter from "../components/Counter";
import { fireEvent,  render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

let counter;
let countValue;

beforeEach(() => {
  counter = render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  countValue = screen.getByTestId("count");
  expect(countValue).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  countValue = screen.getByTestId("count");

  expect(countValue).toHaveTextContent("0");
  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent("1");

});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', { name: '-' });
  countValue = screen.getByTestId("count");

  expect(countValue).toHaveTextContent("0");
  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent("-1");
});
