import { Injectable } from "@angular/core";


@Injectable()
export class SharedService {

 public _opened: boolean = true;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }




}
