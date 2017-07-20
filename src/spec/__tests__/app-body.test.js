import AppBody from '../../components/app-body';
import AlbumList from '../../components/album-list';
import DataFetcher from '../../data-fetcher';
require('../spec_helper');

import { mount } from 'enzyme';

describe('AppBody', () => {
    let appBody;

    describe('component mounting etc', () => {
        beforeEach(() => {
            spyOnRender(AlbumList);
            spyOn(DataFetcher, 'fetch').and.returnValue('some-stringified-data');

            appBody = mount(<AppBody />);
        });

        it('fetches the raw album list data', () => {
            expect(DataFetcher.fetch).toHaveBeenCalled();
        });

        it('renders a header with text "Albums"', () => {
            expect(appBody.find('h3').at(0).text()).toBe('Albums');
        });

        it('sets the data on the state', () => {
           expect(appBody.state().rawData).toBe('some-stringified-data');
        });

        it('renders AlbumList', () => {
            expect(AlbumList).toHaveBeenRendered();
        });
    });
});