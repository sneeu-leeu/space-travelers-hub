import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';

describe('Space travelers hub app', () => {
  test('renders Missions', () => {
    render(<Provider store={store}><BrowserRouter><Missions /></BrowserRouter></Provider>);
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });
});
