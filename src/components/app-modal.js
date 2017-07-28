import React, {Component} from 'react';
import {BaseModal, ModalBody, ModalFooter} from 'pui-react-modals';
import {Input} from "pui-react-inputs";
import {PrimaryButton} from "pui-react-buttons";
import {Icon} from "pui-react-iconography";
import DataFetcher from "../data-fetcher";
import PropTypes from "prop-types";

const urlForAlbums = 'http://react-music.cfapps.io/albums/';

class AppModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            titleInput: "",
            artistInput: "",
            yearInput: "",
            genreInput: "",
            validTitle: true,
            validArtist: true,
            validYear: true,
            validGenre: true
        };
        this.addAlbum.bind(this);
        this.checkAll.bind(this);
        this.validate.bind(this);
        this.resetStates.bind(this);
    };

    static contextTypes = {
        $store: PropTypes.object
    };

    validate(fieldInput) {
        return fieldInput
    };

    async addAlbum() {
        var payload ={
            "name": this.state.titleInput,
            "artist": this.state.artistInput,
            "year": this.state.yearInput,
            "genre": this.state.genreInput
        };

        fetch(urlForAlbums, {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})
    };

    checkAll() {
        if (this.state.titleInput && this.state.artistInput && this.state.yearInput && this.state.genreInput) {
            if (!isNaN(this.state.yearInput)) {
                this.addAlbum();
                return true;
            }
        }
        else {
            this.setState({validTitle: this.validate(this.state.titleInput),
                validArtist: this.validate(this.state.artistInput),
                validYear: this.validate(this.state.yearInput),
                validGenre: this.validate(this.state.genreInput)});
            return false;
        }
    };

    resetStates(){
        this.setState({modalOpen: false,
            titleInput: "",
            artistInput: "",
            yearInput: "",
            genreInput: "",
            validTitle: true,
            validArtist: true,
            validYear: true,
            validGenre: true});
    };

    render() {
        return (
            <div>
                <div>
                    <PrimaryButton className="add-button" icon={<Icon src="add"/>}
                                   onClick={() => this.setState({modalOpen: true})}> Add Album
                    </PrimaryButton>
                </div>
                <BaseModal acquireFocus={false}
                           title='Add an album'
                           className='add-modal'
                           show={this.state.modalOpen}
                           onHide={() => this.resetStates()}>
                    <ModalBody>
                                <Input label="Album Title"
                                       errorMessage="Please input a valid album title"
                                       onChange={event => this.setState({titleInput: event.target.value})}
                                       displayError={!this.state.validTitle}
                                       autoFocus/>
                                <Input label="Artist"
                                       errorMessage="Please input a valid artist"
                                       onChange={event => this.setState({artistInput: event.target.value})}
                                       displayError={!this.state.validArtist}
                                       autoFocus/>
                                <Input label="Release Year"
                                       errorMessage="Please input a valid year"
                                       onChange={event => this.setState({yearInput: event.target.value})}
                                       displayError={this.state.validYear && !isNaN(this.state.yearInput) ? false : true}
                                       autoFocus/>
                                <Input label="Genre"
                                       errorMessage="Please input a valid genre"
                                       onChange={event => this.setState({genreInput: event.target.value})}
                                       displayError={!this.state.validGenre}
                                       autoFocus/>
                    </ModalBody>
                    <ModalFooter className="modal-buttons">
                        <PrimaryButton alt className="cancel-button" onClick={() => this.resetStates()}> Cancel
                        </PrimaryButton>
                        <PrimaryButton className="add-button"
                                       onClick={() => this.checkAll() ? this.resetStates()
                                           : this.setState({modalOpen: true})}> Add
                        </PrimaryButton>
                    </ModalFooter>
                </BaseModal>
            </div>
        )
    }
}
export default AppModal;
