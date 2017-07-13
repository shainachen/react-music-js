/**
 * Created by pivotal on 7/11/17.
 */
import React, { Component } from 'react';
import {Dropdown, DropdownItem} from "pui-react-dropdowns";

class dropdown extends Component {
    render() {
        return (
            <div className="form-group">
                <Dropdown icon='more_vert' menuAlign='left'>
                    <DropdownItem href="#">lorem ipsum</DropdownItem>
                    <DropdownItem href="#">lorem ipsum</DropdownItem>
                    <DropdownItem href="#">lorem ipsum</DropdownItem>
                </Dropdown>
            </div>
        );
    }
}
export default dropdown;