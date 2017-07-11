import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumList from "./AlbumList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Music</h2>
                    <p className="Table-contents">
                    <h3>Albums</h3>
                    <AlbumList>AlbumList</AlbumList>
                    </p>
                </div>
            </div>
        );
    }
}
 export default App;