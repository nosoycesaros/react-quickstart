// configure any helper you need for testing here
import chai from 'chai';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

/**
 * this function creates a mock DOM into the testing environment.
 * This mock DOM can be used to eeply render React components,
 * as opposed to renderShallowComponent(), that renders components
 * without their children components.
 *
 * @return {void}
 */
function createMockDOM() {
  // initialize a simple HTML document
  // that will be rendered to a DOM tree
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  const win = doc.defaultView;

  // hoist the window and window.document
  // globals to the node global object
  global.document = doc;
  global.window = win;

  // hoist all of the 'window' object properties
  // to node's global object
  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });
}

/**
 * render a React component with the specified props.
 * It renders components in a "shallow" manner, i.e: it does not render
 * any child components the tested component may have.
 *
 * @param {React.Component} Compoment  the component class to render
 * @param {Object}          props      the component's props (defaults to no props).
 *
 * @return {Object} an object with the rendered component and related metadata
 */
export function renderShallowComponent(ComponentClass, props = {}) {
  const renderer = TestUtils.createRenderer();
  renderer.render(
    React.createElement(ComponentClass, props, null)
  );
  const component = renderer.getRenderOutput();

  return { props, component, renderer };
}

// configure any chai helper here
chai.use(sinonChai);
