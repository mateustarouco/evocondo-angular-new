import { Injectable } from '@angular/core';
import {from as fromPromise} from "rxjs";
import {graphqlOperation} from "aws-amplify";
import {getProcuration, listProcuration} from "../../graphql/queries";
import {AmplifyService} from "aws-amplify-angular";
import {resolveProcuration} from "../../graphql/mutations";

@Injectable({
  providedIn: 'root'
})
export class OccurenceService {

  constructor(
    private amplifyService : AmplifyService
  ) { }

  listProcuration() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listProcuration))).subscribe((item: any) => {
        resolve(item.data.listProcuration)
      }, err => {
        reject(err)
      })
    })
  }

  resolveProcuration(data : any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(resolveProcuration, data))).subscribe((item: any) => {
        resolve(item.data.resolveProcuration)
      }, err => {
        reject(err)
      })
    })
  }

  getProcuration(id : any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getProcuration, {id: id}))).subscribe((item: any) => {
        resolve(item.data.getProcuration)
      }, err => {
        reject(err)
      })
    })
  }

}
