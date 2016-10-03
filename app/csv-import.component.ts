import { Component }            from '@angular/core';
import { OrderBy }              from './orderby.pipe';
import { Helper }               from './helper.service'

@Component({
    selector:   'csv-import',
    templateUrl:'app/csv-import.component.html',
    styleUrls:  [
        'app/csv-import.component.css'
    ],
    pipes: [
        OrderBy
    ]
})

export class CsvImportComponent {

    public data     : any;
    public headers  : Array<string> = [];
    public order    : string;

    // fires when new file has been selected
    public changeListener($event: any) : void {
        this.readThis($event.target);
    }

    // sets the parameter by which to order the list
    public orderList(order: string) : void {
        this.order = order;
    }

    // read file contents
    private readThis(inputValue: any) : void {
        let file:File = inputValue.files[0];
        let myReader:FileReader = new FileReader();

        // fires as soon as file has been loaded
        myReader.onloadend = (e) => {
            let result : any = Helper.csv2json(myReader.result);
            this.data = JSON.parse(result.json);
            this.headers = result.headers;
        };

        myReader.readAsText(file);
    }

    // test is value is by any chance a valid date
    public isDate(date : string) : boolean {
        let ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i
        return ISO_8601_FULL.test(date);
    }
}