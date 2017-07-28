import React, { Component } from 'react';
import PropTypes from "prop-types";
import DataFetcher from '../data-fetcher';
import AlbumList from "./album-list";
import AppModal from "./app-modal";
import {Grid, FlexCol} from 'pui-react-flex-grids';


const urlForAlbums = 'http://react-music.cfapps.io/albums/';

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
            <div className="app-body phxl">
                <h1 className="pvxxl">Albums</h1>
                <AppModal/>
                <AlbumList/>
            </div>
        )
    };
}

export default AppBody;