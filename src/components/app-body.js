import React, { Component } from 'react';
import AlbumList from "./album-list";
import AppModal from "./app-modal";

class AppBody extends Component {
    render() {
        return (
            <div className="app-body">
                <h3>Albums</h3>
                <AppModal/>
                <AlbumList/>
            </div>
        )
    }
}

export default AppBody;