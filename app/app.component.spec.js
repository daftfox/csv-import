"use strict";
var app_component_1 = require('./app.component');
describe('AppComponent', function () {
    var app;
    beforeEach(function () {
        app = new app_component_1.AppComponent();
    });
    it('has correct title', function () {
        expect(app.title).toEqual("Rabobank CSV import");
    });
});
//# sourceMappingURL=app.component.spec.js.map