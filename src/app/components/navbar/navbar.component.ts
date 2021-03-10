import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrar = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
