import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public _opened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



  public _toggleSidebar() {
    this._opened = !this._opened;
  }

}
