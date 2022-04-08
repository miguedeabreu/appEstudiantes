import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/shared/estudiante.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {

  public estudiante: Estudiante = new Estudiante ("","",0,"",0)

  constructor(private estudianteService: EstudianteService, private router: Router, 
              private rutaActiva: ActivatedRoute) { }

  cargar(): void {
    this.rutaActiva.params.subscribe(
      e => {
        let id = e['id_student'];
        if(id) {
          this.estudianteService.get(id).subscribe(
            es => this.estudiante = es
          );
        }
      }
    );
  }

  create():void {
    console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe(
      res=>this.router.navigate(['/estudiantes'])
    );
  }

  update(): void {
    console.log(this.estudiante)
    this.estudianteService.update(this.estudiante).subscribe(
      res=>this.router.navigate(['/estudiantes'])
    );
  }


  ngOnInit(): void {
  }

}
