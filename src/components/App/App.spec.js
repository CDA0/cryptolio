import 'react-native';
import React from 'react';
import { App } from './App';

// Note: test renderer must be required after react-native.
import ShallowRenderer from 'react-test-renderer/shallow';

const getShallowRenderer = toRender => {
  const renderer = new ShallowRenderer();
  renderer.render(toRender);
  return renderer;
};

const getShallowOutput = toRender =>
  getShallowRenderer(toRender).getRenderOutput();

it('renders', () => {
  const rendered = getShallowOutput(<App />);

  // expect(rendered).toMatchSnapshot();
  expect(rendered).not.toBe(false);
});
