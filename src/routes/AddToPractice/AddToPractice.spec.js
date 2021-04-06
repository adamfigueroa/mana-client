import React from 'react';
import ReactDOM from 'react-dom';
import AddToPractice from './AddToPractice';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddToPractice component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path="/addtopractice" exact component={AddToPractice} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
