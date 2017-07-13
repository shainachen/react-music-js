import React, { Component } from 'react';
import {Icon} from "pui-react-iconography";
import '../stylesheets/app.css';

class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <Icon className="app-logo" src="react"/>
                <h2>React Music</h2>
            </div>
        )
    }
}

export default AppHeader;