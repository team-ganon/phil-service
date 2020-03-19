import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../client/components/App';

describe('App Component', () => {

  it('<App /> currentPlace state should be zero', () => {
    const wrapper = shallow(<App />);
    const currentPlaceState = wrapper.state().currentPlace;
    expect(currentPlaceState).toEqual(0);
  });

  it('App SnapShot Test', () => {
    const AppJson = renderer.create(<App />).toJSON();
    expect(AppJson).toMatchSnapshot();
  });
  
});