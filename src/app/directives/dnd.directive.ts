import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding('class.fileover') 
  fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();

    // Dragover listener
    @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = true;
    }
  
    // Dragleave listener
    @HostListener('dragleave', ['$event']) public onDragLeave(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = false;
    }
  
    // Drop listener
    @HostListener('drop', ['$event']) public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { file: any; }; }) {
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = false;
      let file = evt.dataTransfer.file;
      if (file > 0) {
        this.fileDropped.emit(file);
      }
    }

  constructor() { }

}
