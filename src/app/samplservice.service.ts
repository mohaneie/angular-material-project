import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SamplserviceService {

  constructor(private http: HttpClient) { }
   info(data) {
     return this.http.post('http://localhost:2000/add', data)
   }
}
