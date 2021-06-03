import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'symbolPipe'
})
export class SymbolPipePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}


  transform(value: boolean): any {
    if (value == true) {
      return this.sanitizer.bypassSecurityTrustHtml('&#10004;');;
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('&#10008;');
    }
  }

}
