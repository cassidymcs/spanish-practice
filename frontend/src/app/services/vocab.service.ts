import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VocabService {

  VOCAB_URL: string = 'http://localhost/3000/vocab'

  constructor(private http:HttpClient) { }

  public getVocab(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/vocab')
  }
}
