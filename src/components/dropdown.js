import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataFetcher from "../data-fetcher";
import {Dropdown, DropdownItem} from "pui-react-dropdowns";
import {BaseModal, ModalBody, ModalFooter} from "pui-react-modals";
import {Input} from "pui-react-inputs";
import {PrimaryButton} from "pui-react-buttons";

const urlForAlbums = 'http://react-music.cfapps.io/albums/';

class DropdownMenu extends Component {

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

    };

    static contextTypes = {
        $store: PropTypes.object
    };

    async deleteAlbum(){
        await fetch(urlForAlbums + this.props.rowDatum.id, {
            method: 'DELETE'
        });
        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})

    }

    async editAlbum( ) {
        var payload ={
            "name": this.state.titleInput,
            "artist": this.state.artistInput,
            "year": this.state.yearInput,
            "genre": this.state.genreInput
        };

        await fetch(urlForAlbums + this.props.rowDatum.id, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})
    }

    checkAll() {
        if (this.state.titleInput && this.state.artistInput && this.state.yearInput && this.state.genreInput) {
            if (!isNaN(this.state.yearInput)) {
                this.editAlbum();
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div className="form-group">
                <Dropdown icon='more_vert' menuAlign='left' className="dropdownIcon" style={{}}>
                    <DropdownItem onClick={() => this.setState({
                        modalOpen: true,
                        titleInput: this.props.rowDatum.name,
                        artistInput: this.props.rowDatum.artist,
                        yearInput: this.props.rowDatum.year,
                        genreInput: this.props.rowDatum.genre
                    })} >Edit</DropdownItem>
                    <DropdownItem onClick={() => {this.deleteAlbum()}}>Delete</DropdownItem>
                </Dropdown>
                <BaseModal acquireFocus={false}
                           title='Edit an album'
                           show={this.state.modalOpen}
                           onHide={() => this.setState({modalOpen: false})}>
                    <ModalBody>
                        <Input label="Album Title"
                               errorMessage="Please input a valid album title"
                               placeholder={this.state.titleInput}
                               onChange={event => this.setState({titleInput: event.target.value})}
                               displayError={!this.state.titleInput}
                               autoFocus/> <p/>
                        <Input label="Artist"
                               errorMessage="Please input a valid artist"
                               placeholder={this.state.artistInput}
                               onChange={event => this.setState({artistInput: event.target.value})}
                               displayError={!this.state.artistInput}
                               autoFocus/> <p/>
                        <Input label="Release Year"
                               errorMessage="Please input a valid year"
                               placeholder={this.state.yearInput}
                               onChange={event => this.setState({yearInput: event.target.value})}
                               displayError={this.state.yearInput && !isNaN(this.state.yearInput) ? false : true}
                               autoFocus/> <p/>
                        <Input label="Genre"
                               errorMessage="Please input a valid genre"
                               placeholder={this.state.genreInput}
                               onChange={event => this.setState({genreInput: event.target.value})}
                               displayError={!this.state.genreInput}
                               autoFocus/> <p/>
                    </ModalBody>
                    <ModalFooter className="modal-buttons">
                        <PrimaryButton alt onClick={() => this.setState({
                            modalOpen: false,
                            titleInput: this.props.rowDatum.name,
                            artistInput: this.props.rowDatum.artist,
                            yearInput: this.props.rowDatum.year,
                            genreInput: this.props.rowDatum.genre
                        })}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton
                                       onClick={() => this.checkAll() ? this.setState({
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