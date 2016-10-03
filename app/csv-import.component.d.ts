export declare class CsvImportComponent {
    data: any;
    headers: Array<string>;
    order: string;
    changeListener($event: any): void;
    orderList(order: string): void;
    private readThis(inputValue);
    isDate(date: string): boolean;
}
