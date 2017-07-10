import React, {Component} from 'react';

//const urlForAlbums = 'http://react-music.cfapps.io/albums.json'
const url = "https://facebook.github.io/react-native/movies.json"
//const albumDataList = fetch(urlForAlbums)


class AlbumList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    componentDidMount() {
        const that = this;

        fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data){
                that.setState({title : data.title,
                description : data.description,
                movies : [
                    {
                    title1: data.movies.title,
                    releaseYear1: data.movies.releaseYear
                },
                    {
                        title2: data.movies.title,
                        releaseYear2: data.movies.releaseYear
                    },
                    {
                        title3: data.movies.title,
                        releaseYear3: data.movies.releaseYear
                    }, {
                        title4: data.movies.title,
                        releaseYear4: data.movies.releaseYear
                    },{
                        title5 : data.movies.title,
                        releaseYear5 : data.movies.releaseYear
                    }
                ]})
            });
    }

/*
   componentDidMount(){
    fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                'xyz' : {"hi" : responseJson},
                'people' : [{'name':'something_else', 'email':'email@gmail.com'}, {'name':'morgan', 'email':'mogo@gmail.com'}]

            });
        });
    }
   */

    render(){

        if(!this.state.movies) return <p>Loading...</p>
        return (
            <div>
                <h1>{this.state.movies.releaseYear1}</h1>
            </div>
    )
    }
}

export default AlbumList;