import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http : HttpClient) { }

  returnCep(endPoint: string): any {
    return new Promise((resolve, reject) => {
      this.http.get(endPoint)
        .subscribe((result: any) => {
          resolve(result)
        }, err => {
          reject(err)
        })
    })
  }
}
