import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoRest {
  
  private http = inject(HttpClient);

  private url = 'https://orange-lamp-5g6rw5r654v7c7p66-8080.app.github.dev';
  
  getParams(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/params');
  }

  postParam(): Observable<any[]> {
    return this.http.post<any[]>(this.url+'/param/nuevo',{id:'EJEMPLO',valor:'Valor de ejemplo'});
  }
}