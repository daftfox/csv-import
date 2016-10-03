import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let app: AppComponent;

    beforeEach(() => {
        app = new AppComponent();
    });

    it('has correct title', () => {
        expect(app.title).toEqual("Rabobank CSV import");
    });
});