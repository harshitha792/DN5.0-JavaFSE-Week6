import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel'
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (!credits || credits <= 0) {
      return 'No Credits';
    }

    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
