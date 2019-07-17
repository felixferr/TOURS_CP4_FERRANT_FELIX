import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite } from '../model/actualite.model';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor( public http: HttpClient) {}

  createActu(): Observable<Actualite>{
    return this.http.post<Actualite>('http://localhost:3000/api/actualite');
    }
}
