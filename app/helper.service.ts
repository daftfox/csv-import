export class Helper{

    // converts strings with CSV formattings to an array
    public static csvToArray(strData: string, strDelimiter: string) : any {

        strDelimiter = (strDelimiter || ",");
        let objPattern = new RegExp((
            // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        // Quoted fields.
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        // Standard fields.
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");

        let arrData : Array<string>[] = [[]];
        let arrMatches: Array<string> = null;

        while (arrMatches = objPattern.exec(strData)) {
            let strMatchedDelimiter = arrMatches[1];

            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                arrData.push([]);
            }

            let strMatchedValue: string = null;
            if (arrMatches[2]) {
                strMatchedValue = arrMatches[2].replace(
                    new RegExp("\"\"", "g"), "\"");
            } else {
                strMatchedValue = arrMatches[3];
            }
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        return (arrData);
    }

    // converts CSV to json format
    public static csv2json(csv : string) : any {
        let headers : Array<string> = [];
        let array = Helper.csvToArray(csv, null);
        let objArray : Array<any> = [];
        for (let i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (let k = 0; k < array[0].length && k < array[i].length; k++) {
                let key = array[0][k];
                if(headers.indexOf(array[0][k]) === -1){
                    headers.push(array[0][k]);
                }
                objArray[i - 1][key] = array[i][k]
            }
        }

        var json = JSON.stringify(objArray);
        var str = json.replace(/},/g, "},\r\n");

        return {headers: headers, json: str};
    }
}