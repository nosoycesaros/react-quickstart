// configure any helper you need for testing here
import chai from 'chai';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

/**
 * render a React component with the specified props.
 * @param {React.Component} Compoment  the component class to render
 * @param {Object}          props      the component's props (defaults to no props).
 *
 * @return {Object} an object with the rendered component and related metadata
 */
export function renderComponent(ComponentClass, props = {}) {
  const renderer = TestUtils.createRenderer();
  renderer.render(
    React.createElement(ComponentClass, props, null)
  );
  const component = renderer.getRenderOutput();

  return { props, component, renderer };
}

// configure any chai helper here
chai.use(sinonChai);
