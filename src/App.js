import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';





function App() {


    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/search">
                        {/* Results page */}
                        <h1>This is the search page</h1>
                    </Route>

                    <Route path="/">
                        {/* Home Page */}
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
