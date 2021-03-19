import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Mostrar = false;
  username: any = null;

  constructor() { }

  ngOnInit(): void {
      this.username = localStorage.getItem('email');
  }

  // tslint:disable-next-line: typedef
  Toggle() {
    this.Mostrar = !this.Mostrar;
  }



}
