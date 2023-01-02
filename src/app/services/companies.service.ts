import {Injectable} from '@angular/core';
import {from as fromPromise} from "rxjs";
import {graphqlOperation} from "aws-amplify";
import {getCompany, getCompanyUsers, listCompanyUsers} from "../../graphql/queries";
import {AmplifyService} from "aws-amplify-angular";
import {AuthService} from "../core/auth/authService";
import {newUserCompany, updateUserCompany} from "../../graphql/mutations";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private amplifyService: AmplifyService,
    public authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
  }

  permissions = [
    {
      icon: 'form',
      discription: 'Acessos a assembléias virtuais para o condominio',
      title: 'Assembléia Virtual',
      value: 'assembly',
      permission: ''
    },
    {
      icon: 'occurrence',
      discription: 'Criar, editar e procurações abertas pelos moradores',
      title: 'Procurações',
      value: 'procuration',
      permission: ''
    },
    {
      icon: 'companie',
      discription: 'Apenas Usuários com privilégios elevados',
      title: 'Empresas',
      value: 'company',
      permission: ''
    },
    {
      icon: 'building',
      discription: 'Acesso a informações referentes ao Condominios',
      title: 'Condominios',
      value: 'condominium',
      permission: ''
    }
  ]

  getCompany() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getCompany))).subscribe((item: any) => {
        resolve(item.data.getCompany)
      }, err => {
        reject(err)
      })
    })
  }

  getCompanyUsers(user_id: any) {
    let data = {
      id: user_id
    }
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getCompanyUsers,data))).subscribe((item: any) => {
        resolve(item.data.getCompanyUsers)
      }, err => {
        reject(err)
      })
    })
  }

  listCompanyUsers(company_id: any) {
    let data = {
      id: company_id
    }
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listCompanyUsers, data))).subscribe((item: any) => {
        resolve(item.data.listCompanyUsers)
      }, err => {
        reject(err)
      })
    })
  }

  updateCompanyUsers(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(updateUserCompany, data))).subscribe((item: any) => {
        resolve(item.data.updateUserCompany)
      }, err => {

        switch (err.errors[0].errorType) {
          case "TypeError":
            this.openSnackBar("Verifique os dados e tente novamente")
            break
          case "UsernameExistsException":
            this.openSnackBar("O usuario com esse E-Mail já existe")
            break
          case "InvalidParameterException":
            this.openSnackBar("Verifique os dados e tente novamente")
            break
          default:
            this.openSnackBar("Não sei oq aconteceu")
            break
        }
        reject(err)
      })
    })
  }

  newCompanyUser(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(newUserCompany, data))).subscribe((item: any) => {
        resolve(item)
      }, err => {
        switch (err.errors[0].errorType) {
          case "TypeError":
            this.openSnackBar("Verifique os dados e tente novamente")
            break
          case "UsernameExistsException":
            this.openSnackBar("O usuario com esse E-Mail já existe")
            break
          case "InvalidParameterException":
            this.openSnackBar("Verifique os dados e tente novamente")
            break
          default:
            this.openSnackBar("Não sei oq aconteceu")
            break
        }
        reject(err)
      })
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      duration: 3000,
    });
  }

}
