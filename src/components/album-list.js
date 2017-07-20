import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Table} from 'pui-react-table';
import DropdownMenu from "./dropdown";

const types = require('prop-types');

function update(){
    this.setState();
}

class AlbumList extends Component {
    static contextTypes = {
        $store: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    // static propTypes = {
    //     rawData: types.string.isRequired
    // };

    render(){
        if(!this.context.$store.refine('rawData').get()) return <p>Loading...</p>;

        //const dropdownMenuWithProps = <DropdownMenu rawData = {this.props.rawData}/>;


        const columns = [
            {
                attribute: 'name',
                displayName: 'Album Title',
                sortable: true,
                cellClass: "title-column"
            },
            {
                attribute: 'artist',
                displayName: 'Artist',
                sortable: true,
                cellClass: "artist-column"
            },
            {
                attribute: 'year',
                displayName: 'Year',
                sortable: true,
                cellClass: "year-column"
            },
            {
                attribute: 'genre',
                displayName: 'Genre',
                sortable: true,
                cellClass: "genre-column"
            },
            {
                attribute: '',
                CustomCell: DropdownMenu,
                // CustomCell: () => dropdownMenuWithProps,
                cellClass: "button-column"
            }
        ];


        return (
            <div>
                <Table style={{color: "#243641"}} columns={columns} data={JSON.parse(this.context.$store.refine('rawData').get())} defaultSort='instances'/>
            </div>
        )
    }
}

export default AlbumList;