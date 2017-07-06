import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
*/