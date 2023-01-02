import {Injectable} from '@angular/core';
import {from as fromPromise} from "rxjs";
import {graphqlOperation} from "aws-amplify";
import {checkPlan, getCondominium, getResidentUsers, listCondominium, listResidentUsers} from "../../graphql/queries";
import {AmplifyService} from "aws-amplify-angular";
import {newResidentUser, updateCondominium, updateResident, createChargeCondominium, createCondominium} from "../../graphql/mutations";

@Injectable({
  providedIn: 'root'
})
export class CondomiumsService {

  constructor(
    private amplifyService: AmplifyService,
  ) {
  }


  listCondominium() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listCondominium))).subscribe((item: any) => {
        resolve(item.data.listCondominium)
      }, err => {
        reject(err)
      })
    })
  }

  listResidentUsers(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listResidentUsers, {condominium_id: id}))).subscribe((item: any) => {
        resolve(item.data.listResidentUsers)
      }, err => {
        reject(err)
      })
    })
  }

  newResidentUser(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(newResidentUser, data))).subscribe((item: any) => {
        resolve(item.data.newResidentUser)
      }, err => {
        reject(err)
      })
    })
  }

  getResidentUsers(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getResidentUsers, {id: id}))).subscribe((item: any) => {
        resolve(item.data.getResidentUsers)
      }, err => {
        reject(err)
      })
    })
  }

  updateResident(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(updateResident, data))).subscribe(
        (item: any) => {
          resolve(item.data.updateResident)
        }, err => {
          reject(err)
        })
    })
  }

  updateCondominium(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(updateCondominium, data))).subscribe(
        (item: any) => {
          resolve(item.data.updateCondominium)
        }, err => {
          reject(err)
        })
    })
  }

  getCondominium(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getCondominium, {"id": data}))).subscribe(
        (item: any) => {
          resolve(item.data.getCondominium)
        }, err => {
          reject(err)
        })
    })
  }
  checkPlan(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(checkPlan, {"id": id}))).subscribe(
        (item: any) => {
          resolve(item.data.getCondominium)
        }, err => {
          reject(err)
        })
    })
  }
  createChargeCondominium(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(createChargeCondominium, {"id": id}))).subscribe(
        (item: any) => {
          resolve(item.data.createChargeCondominium)
        }, err => {
          reject(err)
        })
    })
  }
  createCondominium(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(createCondominium, data))).subscribe(
        (item: any) => {
          resolve(item.data.createCondominium)
        }, err => {
          reject(err)
        })
    })
  }
}
