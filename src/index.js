import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';

import App from './App';

ReactDom.render( <App />, document.querySelector('#root'));