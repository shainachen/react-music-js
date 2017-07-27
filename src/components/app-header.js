import React, { Component } from 'react';
import {Icon} from "pui-react-iconography";

class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-header-container phxl grid">
                    <div className="col col-middle">
                        <div className="header-text">
                            <Icon className="app-logo mrm" src="react" verticalAlign="baseline"/>
                            React Music
                        </div>
                    </div>
                    <div className="col col-fixed col-middle header-text">
                            <Icon className="app-info" src="info_outline"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default AppHeader;