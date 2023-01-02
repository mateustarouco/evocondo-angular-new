import {Component, OnInit} from '@angular/core';
import {Auth, graphqlOperation} from "aws-amplify";
import {from as fromPromise} from "rxjs";
import {getData} from "../../../graphql/queries";
import {AmplifyService} from "aws-amplify-angular";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  constructor(private amplifyService : AmplifyService) {
  }
  logo =''
  ngOnInit(): void {
    // @ts-ignore
    this.logo =  localStorage.getItem('logo')
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(getData))).subscribe((item: any) => {
      localStorage.setItem('logo',item.data.getData['logo'])
      this.logo = item.data.getData['logo']
    })
  }

  signOut() {
    Auth.signOut().then(() => {
      window.location.reload()
    });
  }

}
