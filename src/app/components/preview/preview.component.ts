import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  _opened = true;
  constructor() { }

  ngOnInit(): void {
  }
  _toggleSidebar(_opened : any) {
    this._opened = _opened;

  }
}
