import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tree'
})
export class TreePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}
