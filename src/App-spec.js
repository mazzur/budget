import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App", function() {
  it("should render with minimal props", function() {
    expect(shallow(<App />).length).toBe(1);
  });
});