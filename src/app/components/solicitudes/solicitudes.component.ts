import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Pasantes } from 'src/app/models/pasantes';
import { PasantesService } from 'src/app/services/pasantes.service';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

 pasante: Pasantes[] = [];

  // tslint:disable-next-line: new-parens
  private updateSubscription: Subscription = new Subscription;

  constructor(private Services: PasantesService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.updateSubscription = interval(1000).subscribe(
      (val) => {
        this.getAll();
      }
    );

     this.getAll();


  }

  // tslint:disable-next-line: typedef
  private getAll(){
    this.Services.solicitudes()
    // tslint:disable-next-line: deprecation
    .subscribe((

      pasantes: Pasantes[]) => this.pasante = pasantes);
  }

  // tslint:disable-next-line: typedef


  // tslint:disable-next-line: typedef
  borrar(id: string) {
    const user = this.pasante.find(x => x.idRequestInternship === id);
    if (!user) { return; }

    this.Services.borrar(id)
      .pipe(first())
      // tslint:disable-next-line: deprecation
      .subscribe(() => this.pasante = this.pasante.filter(x => x.idRequestInternship !== id));
  }


}
