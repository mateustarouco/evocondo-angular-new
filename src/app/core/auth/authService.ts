import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, map, } from "rxjs/operators";

import {BehaviorSubject, Observable, of, Subject,  from as fromPromise} from 'rxjs';


import {AmplifyService} from 'aws-amplify-angular';
import {graphqlOperation} from "aws-amplify";
import {getData} from "../../../graphql/queries";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string | undefined;
  public userEmail: string | undefined;
  public loggedUser = false;
  private userLoggedIn = new Subject<boolean>();
  buscando: any
  public userData: Array<any> = [{name: '', action: ''}]
  permis: Array<any> = [];
  public permissions = {}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private amplifyService: AmplifyService) {
    this.userLoggedIn.next(false);
  }



  loadUser(user: any) {
    this.loggedUser = true
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(getData))).subscribe((item: any) => {
      const result: any = item.data.getData.user_permissions
      Object.keys(result).map((key: any) => {
        this.userData.push({name: String(key), action: item.data.getData.user_permissions[key]})
      })
    })
  }

  autenticatedUser(): Observable<boolean> {
    return fromPromise(this.amplifyService.auth().currentAuthenticatedUser({bypassCache: true}))
      .pipe(
        map(resp => {
          const user: any = resp;
          this.loadUser(user);
          return true
        }),
        catchError(error => {
          this.amplifyService.auth().signOut();
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }

  canRead(router: any) {
    let canRead = false
    if (this.userData.filter((item: any) =>
      item.name.includes("custom:" + router.replace("/", ''))
    ).length > 0) {
      canRead = true
    }
    return canRead
  }

  canWrite(permission: string) {
    let canWrite = false
    if (this.userData.filter((item: any) =>
      item.name.includes(permission) &&
      item.action == 'rw'
    ).length > 0) {
      canWrite = true
    }
    return canWrite
  }

}
