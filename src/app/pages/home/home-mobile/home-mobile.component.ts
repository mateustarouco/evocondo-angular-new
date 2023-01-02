import { Component, OnInit } from '@angular/core';
import {AssemblyService} from "../../../services/assembly.service";
import {AuthService} from "../../../core/auth/authService";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent implements OnInit {
  loading = false

  constructor(
    public assemblyService: AssemblyService,
    public authService: AuthService,
  ) {
  }

  assemblys = [{
    title: "",
    condominium_name: "",
    final_date: new Date(),
    initial_date: new Date(),
    status: "",
    id: undefined,
    condominium_id: undefined

  }]
  assemblys_invalid = [{
    title: "",
    condominium_name: "",
    final_date: new Date(),
    initial_date: new Date(),
    status: "", id: undefined,
    condominium_id: undefined

  }]
  logo = ''

  ngOnInit(): void {
    this.loading = true
    this.loadAssemblys()

  }

  signOut() {
    Auth.signOut().then(() => {
      window.location.reload()
    });
  }

  loadAssemblys() {
    this.assemblyService.listAssembly().then(
      (item: any) => {
        this.assemblys = []
        this.assemblys_invalid = []
        item.map((item: any) => {
          if (String(item.final_date) == 'NaN/NaN/NaN ') {
            this.assemblys_invalid.push(item)
          } else {
            item.final_date = item.final_date.slice(0, 10)
            item.final_date = item.final_date.replace(/-/g, '/')
            item.initial_date = item.initial_date.slice(0, 10)
            item.initial_date = item.initial_date.replace(/-/g, '/')

            if (item.status != 'closed') {
              this.assemblys.push(item)
            }
          }
        })
        this.assemblys.sort((b, a) => (a.initial_date < b.initial_date) ? 1 : -1);
        this.loading = false
      })
  }

  getIcon(status: string) {
    if (status == 'waiting') {
      return 'scheldedSend'
    } else if (status == 'scheduled') {
      return 'clock'
    } else if (status == 'open') {
      return 'ok'
    } else if (status == 'closed') {
      return 'xis-bw'
    } else {
      return 'ok'
    }
  }

}
