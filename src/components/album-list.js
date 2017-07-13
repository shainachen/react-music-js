import React, {Component} from 'react';
import {Table} from 'pui-react-table';
const urlForAlbums = 'https://react-music.cfapps.io/albums.json';

const columns = [
    {
        attribute: 'name',
        displayName: 'Album Title',
        sortable: true
    },
    {
        attribute: 'artist',
        displayName: 'Artist',
        sortable: true
    },
    {
        attribute: 'year',
        displayName: 'Year',
        sortable: true
    },
    {
        attribute: 'genre',
        displayName: 'Genre',
        sortable: true
    }
];

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const that = this;

        fetch(urlForAlbums)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data){
                console.log(data);
                that.setState({rawData : JSON.stringify(data.albums)});
                console.log("logger", that.state)
            });
    }

    render(){

        if(!this.state.rawData) return <p>Loading...</p>;
        return (
            <div>
                <Table style={{color: "#243641"}} columns={columns} data={JSON.parse(this.state.rawData)} defaultSort='instances'/>
            </div>
        )
    }
}

export default AlbumList;