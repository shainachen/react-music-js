import React, { Component } from 'react';
import PropTypes from "prop-types";
import DataFetcher from '../data-fetcher';
import AlbumList from "./album-list";
import AppModal from "./app-modal";

const urlForAlbums = 'https://react-music.cfapps.io/albums/';

class AppBody extends Component {

    constructor(props, context) {
        super(props, context);
    };

    static contextTypes = {
        $store: PropTypes.object
    };

    async componentDidMount() {
        const data = await DataFetcher.fetch(urlForAlbums);
        this.context.$store.set({rawData: data});
    };

    render() {
        return (
            <div className="app-body">
                <h3>Albums</h3>
                <AppModal/>
                <AlbumList/>
            </div>
        )
    };
}

export default AppBody;