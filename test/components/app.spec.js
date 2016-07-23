import { expect } from 'chai';
import { renderComponent } from '../helpers';

// import react component
import App from '../../assets/js/App';

describe('App Component', () => {
  let component, props;
  const initialProps = {};

  before(() => {
    ({ props, component } = renderComponent(App, initialProps));
  });

  it('should say hello', () => {
    // get the component's children
    const paragraph = component.props.children;
    expect(paragraph.props.children).to.equal('Hello');
  });
})
