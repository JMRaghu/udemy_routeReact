import React from 'react';
import ReactDOM from 'react-dom';
import{Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './Users'
import About from './About'
import * as serviceWorker from './serviceWorker';

const routing = (
<Router>
    <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Users">Users</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
        </ul>
        <Switch>
        <Route  exact path='/' component={App} />
        <Route path='/Users' component={Users} />
        <Route path='/About' component={About} />
        </Switch>
    </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

5751915853