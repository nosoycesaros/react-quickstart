import { expect } from 'chai';
import { renderShallowComponent } from '../helpers';
import React from 'react';

// import react test utils
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

// import react component
import App from '../../assets/js/App';

/**
 * Application Component specs
 */
describe('App Component', () => {
  let component, props;
  const initialProps = {};

  // Test if shallow rendering is working
  describe('Using Shallow Rendering', () => {
    // render the component and get it, along with the props
    // it now has after rendering
    before(() => {
      ({ props, component } = renderShallowComponent(App, initialProps));
    });

    // the app should greet the user
    it('should say hello', () => {
      // get the component's children
      const heading = component.props.children;
      expect(heading.props.children).to.equal('Hello');
    });

    // make sure the component has the appropiate classes
    it('should have a container', () => {
      expect(component.props.className).to.equal('container');
    });
  });

  describe('Using Deep Rendering', () => {
    // render the component and get it, along with the props
    // it now has after rendering
    before(() => {
      component = renderIntoDocument(
        React.createElement(App, initialProps, null)
      );
    });

    // the app should greet the user
    it('should say hello', () => {
      // get the component's children
      const heading = findRenderedDOMComponentWithTag(component, 'h1');
      expect(heading.innerHTML).to.equal('Hello');
    });

    // make sure the component has the appropiate classes
    it('should have a container', () => {
      const container = findRenderedDOMComponentWithClass(component, 'container');
      expect(container).to.not.be.null;
    });
  });
})
