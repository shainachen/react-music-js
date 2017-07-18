import React, {Component} from 'react';
import {BaseModal, ModalBody, ModalFooter} from 'pui-react-modals';
import {Input} from "pui-react-inputs";
import {PrimaryButton} from "pui-react-buttons";
import {Icon} from "pui-react-iconography";

const urlForAlbums = 'http://react-music.cfapps.io/albums/';

function addAlbum(titleInput, artistInput, yearInput, genreInput) {
    var payload = {
        "name": titleInput,
        "artist": artistInput,
        "year": yearInput,
        "genre": genreInput
    };
    fetch(urlForAlbums, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(function () {
        return window.location.reload();
    })
}

function checkAll(titleInput, artistInput, yearInput, genreInput) {
    if (titleInput && artistInput && yearInput && genreInput) {
        if (!isNaN(yearInput)) {
            addAlbum(titleInput, artistInput, yearInput, genreInput);
            return true;
        }
    }
    return false;
}

class AppModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            titleInput: "",
            artistInput: "",
            yearInput: "",
            genreInput: ""
        };
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
                                       onClick={() => checkAll(this.state.titleInput, this.state.artistInput, this.state.yearInput, this.state.genreInput) ? this.setState({
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
