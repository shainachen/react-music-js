import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./app-header";
import AppBody from "./app-body";
import '../stylesheets/app.css';
import Cursor from 'pui-cursor';

class App extends Component {
    static childContextTypes = {
        $store: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {store: {}};
    }

    getChildContext() {
        return {$store: this.$store};
    };

    render() {
        this.$store = new Cursor(this.state.store, store => this.setState({store}));
        console.log(this.state.store);
        return (
            <div className="app">
                <AppHeader/>
                <AppBody/>
            </div>
        )
    }
}

export default App;