// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import Instagram from './pages/instagram';

// Theme
import './theme/init';

const start = (
    <Instagram />
);

ReactDOM.render(start, document.getElementById('app'));
