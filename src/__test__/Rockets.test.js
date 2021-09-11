import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';

describe('check if all component are rendered', () => {
  it('renders correctly ', () => {
    const tree = renderer.create(<Provider store={store}><Rockets /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
