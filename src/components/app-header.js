import React, { Component } from 'react';
import {Icon} from "pui-react-iconography";
import {Dropdown, DropdownItem} from "pui-react-dropdowns";
import DataFetcher from '../data-fetcher';
const urlForProfiles = 'http://react-music.cfapps.io/profiles/';
const urlForServices = 'http://react-music.cfapps.io/services/';

function formatResponse(responseData) {
    const dataRevised = responseData.slice(1, -1);
    const dataList = dataRevised.split(',');
    let finalData = "";
    for (let i in dataList) {
        finalData += dataList[i].replace(/"/g, "");
        if (i != (dataList.length - 1)) {
            finalData += ", ";
        }
    }
    return finalData;
}

class AppHeader extends Component {
    constructor(props){
        super(props);
        this.state = {profiles: String(fetch(urlForProfiles)), services: String(fetch(urlForServices))};
    }

    async componentDidMount() {
        const profilesData = await DataFetcher.fetch(urlForProfiles);
        this.setState({profiles: formatResponse(profilesData)});
        const servicesData = await DataFetcher.fetch(urlForServices);
        this.setState({services: formatResponse(servicesData)});
    };

    render() {
        return (
            <div className="app-header">
                <div className="app-header-container phxl grid">
                    <div className="col col-middle">
                        <div className="header-text">
                            <Icon className="app-logo mrm" src="react" verticalAlign="baseline"/>
                            React Music
                        </div>
                    </div>
                    <div className="col col-fixed col-middle header-text">
                        <div className="form-group">
                            <Dropdown className="app-info pvl" icon="info_outline" menuAlign="right">
                                <DropdownItem className="info-contents" style={{textAlign: "left"}}><strong>Profiles:</strong> {this.state.profiles}</DropdownItem>
                                <DropdownItem className="info-contents" style={{textAlign: "left"}}><strong>Services:</strong> {this.state.services}</DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AppHeader;