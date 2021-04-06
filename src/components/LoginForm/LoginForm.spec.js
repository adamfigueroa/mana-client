import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

describe('LoginForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <BrowserRouter>
      ReactDOM.render(
      <LoginForm />, div);
    </BrowserRouter>;
    ReactDOM.unmountComponentAtNode(div);
  });
});
