import React, { Component } from 'react';
import '../stylesheets/app.css';
import AppHeader from "./app-header";
import AppBody from "./app-body"
//import {Dropdown, DropdownItem} from "pui-react-dropdowns";

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