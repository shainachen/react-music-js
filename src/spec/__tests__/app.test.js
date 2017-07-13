import App from '../../components/app';
require('../spec_helper');

describe('App', () => {
    describe('rendering', () => {
        beforeEach(() => {
            ReactDOM.render(<App/>, root);
        });

        it('renders the app header', () => {
          expect(AppHeader).toHaveBeenRendered();
            // expect($('.App-header')).toExist();
        });
    });
});
