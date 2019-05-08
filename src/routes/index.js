import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home/:id" exact component={Home} />
    </Router>
)