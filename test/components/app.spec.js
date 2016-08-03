import { expect } from 'chai';
import { renderComponent } from '../helpers';

// import react component
import App from '../../assets/js/App';

/**
 * Application Component specs
 */
describe('App Component', () => {
  let component, props;
  const initialProps = {};

  // render the component and get it, along with the props
  // it now has after rendering
  before(() => {
    ({ props, component } = renderComponent(App, initialProps));
  });

  // make sure the component has the appropiate classes
  it('should have a container', () => {
    expect(component.props.className).to.equal('container');
  });

  // the app should greet the user
  it('should say hello', () => {
    // get the component's children
    const paragraph = component.props.children;
    expect(paragraph.props.children).to.equal('Hello!');
  });
})
