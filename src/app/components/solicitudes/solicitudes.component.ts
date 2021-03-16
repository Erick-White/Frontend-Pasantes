import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Pasantes } from 'src/app/models/pasantes';
import { PasantesService } from 'src/app/services/pasantes.service';
import { Observable, interval, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

 pasante: Pasantes[] = [];

 pasantes  = new Pasantes();

  // tslint:disable-next-line: new-parens
  private updateSubscription: Subscription = new Subscription;

  // pasants: Pasantes = new Pasantes();

  /*pasants: Pasantes = {
    idRequestInternship: '12',
    name: 'Roman',
    lastname: 'Alcantara',
    cedula: '123-1234567-1',
    phone: '111-111-1111',
    github: 'asegesa12',
    linkedin: 'asegesa12',
    cv: 'stackoverflow',
    birthDate: '2021-03-15T13:36:34.705Z',
    email: 'Roman@gmail.com'

}*/

  // tslint:disable-next-line: new-parens


  constructor(private Services: PasantesService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    //  this.updateSubscription = interval(1000).subscribe(
    //    (val) => {
    //     this.getAll();
    //     console.log(val);
    //   }
    // );

     this.getAll();


  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  private getAll(){
    this.Services.solicitudes()
      .subscribe(resp => {
        // tslint:disable-next-line: semicolon
        this.pasante = (resp as Pasantes[]);
        console.log(resp)
        

      });

    // console.log(this.pasante);
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

  // tslint:disable-next-line: typedef
  onSubmit(f: NgForm){
    // console.log(this.pasante);
     this.Services.aceptar(this.pasantes)
        // tslint:disable-next-line: deprecation
         .subscribe(resp => {
           console.log(resp);
         });


  }


}
