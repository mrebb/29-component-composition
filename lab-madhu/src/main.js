
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import './style/app.scss';

class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
