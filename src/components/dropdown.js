import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataFetcher from "../data-fetcher";
import {Dropdown, DropdownItem} from "pui-react-dropdowns";
import {BaseModal, ModalBody, ModalFooter} from "pui-react-modals";
import {Input} from "pui-react-inputs";
import {PrimaryButton} from "pui-react-buttons";

const urlForAlbums = 'http://react-music.cfapps.io/albums/';

class DropdownMenu extends Component {
    static contextTypes = {
      $store: PropTypes.object
    };

    // componentDidMount() {
    //   this.context.$store.set('foo', 'bar')
    // }

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            titleInput: this.props.rowDatum.name,
            artistInput: this.props.rowDatum.artist,
            yearInput: this.props.rowDatum.year,
            genreInput: this.props.rowDatum.genre
        };
        this.deleteAlbum.bind(this);
        this.editAlbum.bind(this);
        this.checkAll.bind(this);

    }

    async deleteAlbum(id){
        await fetch(urlForAlbums + id, {
            method: 'DELETE'
        });
        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})

    }

    async editAlbum(titleInput, artistInput, yearInput, genreInput, id) {
        var payload ={
            "name": titleInput,
            "artist": artistInput,
            "year": yearInput,
            "genre": genreInput
        };
        await fetch(urlForAlbums + id, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})
    }

    checkAll(titleInput, artistInput, yearInput, genreInput, id) {
        if (titleInput && artistInput && yearInput && genreInput) {
            if (!isNaN(yearInput)) {
                this.editAlbum(titleInput, artistInput, yearInput, genreInput, id);
                return true;
            }
        }
        return false;
    }

    render() {
        // this.context.$store.set('foo', 'bar');
        return (
            <div className="form-group">
                <Dropdown icon='more_vert' menuAlign='left' className="dropdownIcon" style={{}}>
                    <DropdownItem onClick={() => this.setState({modalOpen: true})} >Edit</DropdownItem>
                    <DropdownItem onClick={() => {this.deleteAlbum(this.props.rowDatum.id)}}>Delete</DropdownItem>
                </Dropdown>
                <BaseModal acquireFocus={false}
                           title='Edit an album'
                           className='edit-modal'
                           show={this.state.modalOpen}
                           onHide={() => this.setState({modalOpen: false})}>
                    <ModalBody>
                        <Input label="Album Title"
                               className="edit-input"
                               errorMessage="Please input a valid album title"
                               placeholder={this.state.titleInput}
                               onChange={event => this.setState({titleInput: event.target.value})}
                               displayError={!this.state.titleInput}
                               autoFocus/> <p/>
                        <Input label="Artist"
                               className="edit-input"
                               errorMessage="Please input a valid artist"
                               placeholder={this.state.artistInput}
                               onChange={event => this.setState({artistInput: event.target.value})}
                               displayError={!this.state.artistInput}
                               autoFocus/> <p/>
                        <Input label="Release Year"
                               className="edit-input"
                               errorMessage="Please input a valid year"
                               placeholder={this.state.yearInput}
                               onChange={event => this.setState({yearInput: event.target.value})}
                               displayError={this.state.yearInput && !isNaN(this.state.yearInput) ? false : true}
                               autoFocus/> <p/>
                        <Input label="Genre"
                               className="edit-input"
                               errorMessage="Please input a valid genre"
                               placeholder={this.state.genreInput}
                               onChange={event => this.setState({genreInput: event.target.value})}
                               displayError={!this.state.genreInput}
                               autoFocus/> <p/>
                    </ModalBody>
                    <ModalFooter className="modal-buttons">
                        <PrimaryButton alt large className="cancel-button" onClick={() => this.setState({
                            modalOpen: false,
                            titleInput: this.props.rowDatum.name,
                            artistInput: this.props.rowDatum.artist,
                            yearInput: this.props.rowDatum.year,
                            genreInput: this.props.rowDatum.genre
                        })}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton large className="edit-button"
                                       onClick={() => this.checkAll(this.state.titleInput, this.state.artistInput, this.state.yearInput, this.state.genreInput, this.props.rowDatum.id) ? this.setState({
                                           modalOpen: false})
                                           :this.setState({modalOpen: true})}> Edit
                        </PrimaryButton>
                    </ModalFooter>
                </BaseModal>
            </div>
        );
    }
}
export default DropdownMenu;