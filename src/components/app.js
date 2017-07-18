import React, { Component } from 'react';
import AppHeader from "./app-header";
import AppBody from "./app-body";
import '../stylesheets/app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <AppBody/>
            </div>
        )
    }
}

export default App;