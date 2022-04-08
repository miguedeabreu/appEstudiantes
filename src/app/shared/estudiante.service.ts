import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url: string = "http://localhost:3000/student"

  constructor(private http: HttpClient) { }

  getAll():Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.url);
  }

  get(id: number):Observable<Estudiante> {
    return this.http.get<Estudiante>(this.url + '/' + id);
  }

  create(estudiante: Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.url, estudiante)
  }

  update(estudiante: Estudiante):Observable<Estudiante>{
    return this.http.put<Estudiante>(this.url, estudiante)
  }

  delete(id: number):Observable<Estudiante> {
    return this.http.delete<Estudiante>(this.url + '/' + id);
  }

} 
