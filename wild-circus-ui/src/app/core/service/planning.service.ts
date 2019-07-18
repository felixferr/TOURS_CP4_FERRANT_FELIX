import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planning } from '../model/planning.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  constructor( public http: HttpClient) {}

  public createPlanning(planningForm: Planning): Observable<Planning> {
    return this.http.post<Planning>('http://localhost:3000/api/plannings', planningForm);
    }


    public getPlannings(): Observable<Planning>{
      return this.http.get('http://localhost:3000/api/plannings').pipe(
        map((plannings: any) => { return plannings as Planning;
        })
        )
  };

  public deletePlanning(id: number): Observable<Planning> {
  return this.http.delete<Planning>(`http://localhost:3000/api/plannings/${id}`);
}

public updatePlanning(id: string, planningForm: Planning): Observable<Planning> {
  return this.http.put<Planning>(`http://localhost:3000/api/plannings/${id}`, planningForm);
}
}
