import React, { Component } from 'react';
import {Icon} from "pui-react-iconography";

class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <Icon className="app-logo" src="react"/>
                <div className="header-text">React Music</div>
            </div>
        )
    }
}
export default AppHeader;