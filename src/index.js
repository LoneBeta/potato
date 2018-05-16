import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import 'material-ui';
import './events/index.js';
import './shortcuts.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
