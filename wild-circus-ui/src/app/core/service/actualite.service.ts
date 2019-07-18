import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite } from '../model/actualite.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor( public http: HttpClient) {}

  public createActu(actuForm: Actualite): Observable<Actualite> {
    return this.http.post<Actualite>('http://localhost:3000/api/actualites', actuForm);
    }


    public getActus(): Observable<Actualite>{
      return this.http.get('http://localhost:3000/api/actualites').pipe(
        map((actualites: any) => { return actualites as Actualite;
        })
        )
  };

  public deleteActu(id: number): Observable<Actualite> {
  return this.http.delete<Actualite>(`http://localhost:3000/api/actualites/${id}`);
}

public updateActu(id: string, actuForm: Actualite): Observable<Actualite> {
  return this.http.put<Actualite>(`http://localhost:3000/api/actualites/${id}`, actuForm);
}

}
