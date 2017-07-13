import AppHeader from '../../components/app-header';
import AlbumList from '../../components/album-list';
require('../spec_helper');

describe('AppHeader', () => {
    describe('rendering', () => {
        beforeEach(() => {
            spyOnRender(AlbumList);

            ReactDOM.render(<AppHeader/>, root);
        });

        it('renders the logo', () => {
           expect($('.app-logo svg.icon-react')).toExist();
        });

        it('renders the app name', () => {
            expect(($('h2')[0]).innerHTML).toEqual('React Music');
        });
    });
});