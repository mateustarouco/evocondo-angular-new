import {Injectable} from '@angular/core';
import {AmplifyService} from "aws-amplify-angular";
import {AuthService} from "../core/auth/authService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {from as fromPromise} from "rxjs";
import {graphqlOperation} from "aws-amplify";
import {getData} from "../../graphql/queries";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private amplifyService: AmplifyService,
    public authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
  }

  getData() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getData))).subscribe((item: any) => {
        resolve(item.data.getData)
      }, err => {
        reject(err)
      })
    })
  }
}
