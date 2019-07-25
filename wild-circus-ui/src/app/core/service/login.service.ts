import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  urlApi = `${environment.apiUrl}/auth/signin`;
  public user: boolean;

  login(username: string, password: string) {
    return this.http.post<any>(this.urlApi, { username, password }).pipe(
      tap(user => {
        if (user) {
          this.user = true;
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
  isLogin() {
    if (sessionStorage.getItem("token")) {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.user = false;
  }
}
