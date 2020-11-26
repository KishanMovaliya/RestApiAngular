import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //------------------Api Url----------------------------------------------------------
  baseUrl = "https://www.salonlari.de/rest/all/V1/salesRules/search?searchCriteria"

  constructor(private http: HttpClient) { }

  //-----------------Get Api Fucntion--------------------------------------------------
  getSearchValue() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3'
    });
    let options = { headers: headers };
    return this.http.get(this.baseUrl, options)
  }

}
