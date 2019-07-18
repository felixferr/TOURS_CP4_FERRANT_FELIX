import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Billeterie } from '../model/billleterie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BilleterieService {

  constructor( public http: HttpClient) {}

  public createBilleterie(billeterieForm: Billeterie): Observable<Billeterie> {
    return this.http.post<Billeterie>('http://localhost:3000/api/plannings', billeterieForm);
    }
  
    public getBilleterie(): Observable<Billeterie>{
      return this.http.get('http://localhost:3000/api/billeteries').pipe(
        map((billeteries: any) => { return billeteries as Billeterie;
        })
        )
  };
}
