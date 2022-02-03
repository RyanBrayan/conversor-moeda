import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseURL = "https://economia.awesomeapi.com.br/json/last"

@Injectable({
  providedIn: 'root'
})
export class ConversorMoedaService {

  constructor(private httpClient: HttpClient) { }

  getConversao(de: any, para: any): Observable<any>{
    return this.httpClient.get(`${baseURL}/${de}-${para}`)
  }

}
