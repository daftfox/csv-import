"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var orderby_pipe_1 = require('./orderby.pipe');
var helper_service_1 = require('./helper.service');
var CsvImportComponent = (function () {
    function CsvImportComponent() {
        this.headers = [];
    }
    // fires when new file has been selected
    CsvImportComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    // sets the parameter by which to order the list
    CsvImportComponent.prototype.orderList = function (order) {
        this.order = order;
    };
    // read file contents
    CsvImportComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        // fires as soon as file has been loaded
        myReader.onloadend = function (e) {
            var result = helper_service_1.Helper.csv2json(myReader.result);
            _this.data = JSON.parse(result.json);
            _this.headers = result.headers;
        };
        myReader.readAsText(file);
    };
    // test is value is by any chance a valid date
    CsvImportComponent.prototype.isDate = function (date) {
        var ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
        return ISO_8601_FULL.test(date);
    };
    CsvImportComponent = __decorate([
        core_1.Component({
            selector: 'csv-import',
            templateUrl: 'app/csv-import.component.html',
            styleUrls: [
                'app/csv-import.component.css'
            ],
            pipes: [
                orderby_pipe_1.OrderBy
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CsvImportComponent);
    return CsvImportComponent;
}());
exports.CsvImportComponent = CsvImportComponent;
//# sourceMappingURL=csv-import.component.js.map