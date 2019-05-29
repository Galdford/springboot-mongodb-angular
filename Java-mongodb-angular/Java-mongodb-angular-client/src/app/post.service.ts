import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private uri ='http://' + window.location.hostname + ':9000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  public save(post): Observable<any>{
    return this.http.post(this.uri + '/posts', post);      
  }
}
