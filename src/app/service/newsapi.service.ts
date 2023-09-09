import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  //us news
  topheadlinesnews='https://newsapi.org/v2/top-headlines?country=us&apiKey=6e382b8c2bf8485d88a8882f934b990d';
  // tech news
  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6e382b8c2bf8485d88a8882f934b990d';
  //bussiness
  bussinessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6e382b8c2bf8485d88a8882f934b990d';
  // india
  domnews='https://newsapi.org/v2/top-headlines?country=in&apiKey=6e382b8c2bf8485d88a8882f934b990d';
  
  
  headLines():Observable<any>{
    return this._http.get(this.topheadlinesnews)


  }
  Ptechnews():Observable<any>{
    return this._http.get(this.techNews)


  }
  Pbuzznews():Observable<any>{
    return this._http.get(this.bussinessNews)


  }
  Pdomnews():Observable<any>{
    return this._http.get(this.domnews)


  }
  

  
}
