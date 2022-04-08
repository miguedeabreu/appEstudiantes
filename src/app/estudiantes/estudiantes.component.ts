import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../shared/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public estudiantes: Estudiante[];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {

    this.estudianteService.getAll().subscribe(
      e => this.estudiantes = e
    );

  }

}
