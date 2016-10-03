"use strict";
var Helper = (function () {
    function Helper() {
    }
    // converts strings with CSV formattings to an array
    Helper.csvToArray = function (strData, strDelimiter) {
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp((
        // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec(strData)) {
            var strMatchedDelimiter = arrMatches[1];
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                arrData.push([]);
            }
            var strMatchedValue = null;
            if (arrMatches[2]) {
                strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
            }
            else {
                strMatchedValue = arrMatches[3];
            }
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        return (arrData);
    };
    // converts CSV to json format
    Helper.csv2json = function (csv) {
        var headers = [];
        var array = Helper.csvToArray(csv, null);
        var objArray = [];
        for (var i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                var key = array[0][k];
                if (headers.indexOf(array[0][k]) === -1) {
                    headers.push(array[0][k]);
                }
                objArray[i - 1][key] = array[i][k];
            }
        }
        var json = JSON.stringify(objArray);
        var str = json.replace(/},/g, "},\r\n");
        return { headers: headers, json: str };
    };
    return Helper;
}());
exports.Helper = Helper;
//# sourceMappingURL=helper.service.js.map