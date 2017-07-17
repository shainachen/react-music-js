import React, { Component } from 'react';
import {Dropdown, DropdownItem} from "pui-react-dropdowns";
import {Input} from 'pui-react-inputs';

function deleteAlbum(id){
    console.log("MY id:", id);
    console.log('http://react-music.cfapps.io/albums/' + id);

    fetch('http://react-music.cfapps.io/albums/' + id, {
        method: 'DELETE'
    })
        .then(function(){
            return window.location.reload();
        })



}

class DropdownMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <Dropdown icon='more_vert' menuAlign='left' className="dropdownIcon" style={{}}>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem onClick={() => {deleteAlbum(this.props.rowDatum.id)}}>Delete</DropdownItem>
                </Dropdown>
            </div>
        );
    }
}
export default DropdownMenu;