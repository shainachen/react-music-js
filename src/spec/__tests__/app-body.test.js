import AppBody from '../../components/app-body';
import AlbumList from '../../components/album-list';
require('../spec_helper');

describe('AppBody', () => {
    describe('rendering', () => {
        beforeEach(() => {
            spyOnRender(AlbumList);

            ReactDOM.render(<AppBody/>, root);
        });

        it('renders a header with text "Albums"', () => {
            expect(($('h3')[0]).innerHTML).toEqual('Albums');
        });

        it('renders AlbumList', () => {
            expect(AlbumList).toHaveBeenRendered();
        });
    });
});