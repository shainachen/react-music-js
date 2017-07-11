import React, {Component} from 'react';
const urlForAlbums = 'https://react-music.cfapps.io/albums.json'

class AlbumList extends Component {
    constructor(props) {
        super(props)
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
                that.setState({rawData : JSON.stringify(data)})
                console.log("logger", that.state)
            });
    }

    render(){

        if(!this.state.rawData) return <p>Loading...</p>
        return (
            <div>
                <h1>{this.state.rawData}</h1>
            </div>
    )
    }
}

export default AlbumList;