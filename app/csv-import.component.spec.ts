import { CsvImportComponent }           from './csv-import.component';

describe('Csv-import', () => {
    let csvImport : CsvImportComponent;

    beforeEach(() => {
        csvImport = new CsvImportComponent();
    });

    it('Should change order', () => {
        let testStr = "test";
        csvImport.orderList(testStr);
        expect(csvImport.order).toEqual(testStr);
    });

    it('Should return true', () => {
        let testStr = "2016-10-03T11:02:30";
        expect(csvImport.isDate(testStr)).toEqual(true);
    });

    it('Should return false', () => {
        let testStr = "201-10-03T1:02:30";
        expect(csvImport.isDate(testStr)).toEqual(false);
    });
});