import { from, pipe } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@pipe({
    name: 'currenyConverter'
})

export class CurrencyConverterPipe implements PipeTransform {
    transform(value: number, unit: string) {
        if (value && !isNaN(value)) {
            if (unit === 'Rupee') {
                var currency = value * 73;
                return currency.toFixed(2);
            } else if (unit === 'canadianDoller') {
                var currency = value * 0.7767;
                return currency.toFixed(2);
            }
        }
        return;
    }
}