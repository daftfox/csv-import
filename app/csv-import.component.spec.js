"use strict";
var csv_import_component_1 = require('./csv-import.component');
describe('Csv-import', function () {
    var csvImport;
    beforeEach(function () {
        csvImport = new csv_import_component_1.CsvImportComponent();
    });
    it('Should change order', function () {
        var testStr = "test";
        csvImport.orderList(testStr);
        expect(csvImport.order).toEqual(testStr);
    });
    it('Should return true', function () {
        var testStr = "2016-10-03T11:02:30";
        expect(csvImport.isDate(testStr)).toEqual(true);
    });
    it('Should return false', function () {
        var testStr = "201-10-03T1:02:30";
        expect(csvImport.isDate(testStr)).toEqual(false);
    });
});
//# sourceMappingURL=csv-import.component.spec.js.map