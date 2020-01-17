import React from 'react';
import ReactDOM from 'react-dom';
import Split from './Split';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Split />, div);
  ReactDOM.unmountComponentAtNode(div);
});