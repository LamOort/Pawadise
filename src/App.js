import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';

setAuthorizationToken(localStorage.jwtToken);
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                        {this.showContent(routes)}
                    <Logo/>
                    <Footer />
                </div>
            </Router>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>
    }
}

export default App;