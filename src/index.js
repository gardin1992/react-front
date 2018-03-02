import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free-solid'
import './index.css';

import RootContainer from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<RootContainer />,
	document.getElementById('root'));

registerServiceWorker();
