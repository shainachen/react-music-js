import React, {Component} from 'react';
import {BaseModal, ModalBody, ModalFooter} from 'pui-react-modals';
import {Input} from "pui-react-inputs";
import {PrimaryButton} from "pui-react-buttons";
import {Icon} from "pui-react-iconography";
import DataFetcher from "../data-fetcher";
import PropTypes from "prop-types";
const urlForAlbums = 'http://react-music.cfapps.io/albums/';



class AppModal extends Component {

    static contextTypes = {
        $store: PropTypes.object
    };


    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            titleInput: "",
            artistInput: "",
            yearInput: "",
            genreInput: ""
        };
        this.addAlbum.bind(this);
        this.checkAll.bind(this);

    }

    async addAlbum(titleInput, artistInput, yearInput, genreInput) {
        var payload = {
            "name": titleInput,
            "artist": artistInput,
            "year": yearInput,
            "genre": genreInput
        };
        fetch(urlForAlbums, {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        const newData = await DataFetcher.fetch(urlForAlbums);
        return this.context.$store.set({rawData: newData})


    }

    checkAll(titleInput, artistInput, yearInput, genreInput) {
        if (titleInput && artistInput && yearInput && genreInput) {
            if (!isNaN(yearInput)) {
                this.addAlbum(titleInput, artistInput, yearInput, genreInput);
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                <div>
                    <PrimaryButton large className="add-button" icon={<Icon src="add"/>}
                                   onClick={() => this.setState({modalOpen: true})}>
                        Add Album
                    </PrimaryButton>
                </div>
                <BaseModal acquireFocus={false}
                           title='Add an album'
                           className='add-modal'
                           show={this.state.modalOpen}
                           onHide={() => this.setState({modalOpen: false})}>
                    <ModalBody>
                                <Input label="Album Title"
                                       className="album-input"
                                       errorMessage="Please input a valid album title"
                                       onChange={event => this.setState({titleInput: event.target.value})}
                                       displayError={!this.state.titleInput}
                                       autoFocus/>
                                <Input label="Artist"
                                       className="album-input"
                                       errorMessage="Please input a valid artist"
                                       onChange={event => this.setState({artistInput: event.target.value})}
                                       displayError={!this.state.artistInput}
                                       autoFocus/>
                                <Input label="Release Year"
                                       className="album-input"
                                       errorMessage="Please input a valid year"
                                       onChange={event => this.setState({yearInput: event.target.value})}
                                       displayError={this.state.yearInput && !isNaN(this.state.yearInput) ? false : true}
                                       autoFocus/>
                                <Input label="Genre"
                                       className="album-input"
                                       errorMessage="Please input a valid genre"
                                       onChange={event => this.setState({genreInput: event.target.value})}
                                       displayError={!this.state.genreInput}
                                       autoFocus/>
                    </ModalBody>
                    <ModalFooter className="modal-buttons">
                        <PrimaryButton alt large className="cancel-button" onClick={() => this.setState({
                            modalOpen: false,
                            titleInput: "",
                            artistInput: "",
                            yearInput: "",
                            genreInput: ""
                        })}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton large className="add-button"
                                       onClick={() => this.checkAll(this.state.titleInput, this.state.artistInput, this.state.yearInput, this.state.genreInput) ? this.setState({
                                           modalOpen: false, titleInput: "",
                                           artistInput: "",
                                           yearInput: "",
                                           genreInput: ""
                                       })
                                           : this.setState({modalOpen: true})}>
                            Add
                        </PrimaryButton>
                    </ModalFooter>
                </BaseModal>
            </div>
        )
    }
}
export default AppModal;
