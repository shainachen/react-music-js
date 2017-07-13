import React, { Component } from 'react';
import AlbumList from "./album-list";
import '../stylesheets/app.css';

class AppBody extends Component {
    render() {
        return (
            <div className="app-body">
                <h3>Albums</h3>
                <AlbumList/>
            </div>
        )
    }
}

export default AppBody;