import { Component }            from '@angular/core';

@Component({
    selector:   'my-app',
    template:   `<h1>{{title}}</h1>
                <csv-import></csv-import>`,
    styleUrls:  [
        'app/app.component.css'
    ]
})

export class AppComponent {
    title = "Rabobank CSV import";
}