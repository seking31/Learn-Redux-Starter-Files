// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import css from './styles/style.styl';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import Main from './components/Main';

const router = (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute> 

            </Route>

        </Router>
)

render(<Main/>, document.getElementById('root'));

