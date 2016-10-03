import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';
import { CsvImportComponent }   from './csv-import.component';
//import { routing }              from './app.routing';

// this section is comparable to the App.config section in the app.js that is used in NG1.x
@NgModule({

    // import required modules
    imports:      [
        BrowserModule,
        FormsModule
    ],

    // declare components that are used throughout the app
    declarations: [
        AppComponent,
        CsvImportComponent
    ],

    // what is the entrypoint?
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule {
}
