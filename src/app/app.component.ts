import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  title = 'frontend';
  constructor(public Auth:LoginService) {

  }
}
