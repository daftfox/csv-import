import { PipeTransform } from '@angular/core';
export declare class OrderBy implements PipeTransform {
    static _orderByComparator(a: any, b: any): number;
    transform(input: any, [config]: [string]): any;
}
