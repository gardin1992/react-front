import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootContainer from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<RootContainer />,
	document.getElementById('root'));

registerServiceWorker();
