/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {fireEvent, render} from '@testing-library/react-native';
import {it, describe, expect} from '@jest/globals';

import renderer from 'react-test-renderer';

describe('App Component', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('increments count', () => {
    const {getByText} = render(<App />);
    const incrementButton = getByText('Increment');

    fireEvent.press(incrementButton);
    expect(getByText('Count : 1')).toBeTruthy();
  });

  it('decrements count', () => {
    const {getByText} = render(<App />);
    const decrementButton = getByText('Decrement');

    fireEvent.press(decrementButton);
    expect(getByText('Count : -1')).toBeTruthy();
  });
});
