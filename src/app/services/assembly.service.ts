import {Injectable} from '@angular/core';
import {from as fromPromise} from "rxjs";
import {graphqlOperation} from "aws-amplify";
import {getAssembly, listAssembly, listAssemblyFiled, listResidentUsers, resolveAssembly} from "../../graphql/queries";
import {
  newAssembly,
  scheduleAssembly,
  scheduleAta,
  sendAssembly,
  toFileAssembly,
  updateAssemby,
  uploadPdf
} from "../../graphql/mutations";
import {AmplifyService} from "aws-amplify-angular";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environments/environment";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {

  constructor(
    public amplifyService: AmplifyService,
    private dataService : DataService,
    private _snackBar: MatSnackBar,
    public router: Router,
  ) {
  }

  acting = false
  step = 2
  editing = false
  description = {
    descriptionText: '',
    title: '',
    condominium_id: '',
    condominium_name: '',
    president: '',
    secretary: ''
  }
  questions: Array<any> = []
  hour = {
    warn: '',
    init: '',
    end: ''
  }
  warn_message = ''

  save() {
    this.editing = false
    this.step = 2
  }

  getHour(hour: any) {
    this.warn_message = hour.warn_message
    this.hour = this.dataService.formarScheduleDate(hour)
  }

  getHeader(descriptionForm: any) {
    this.description = {
      descriptionText: descriptionForm.descriptionText,
      title: descriptionForm.title,
      condominium_id: descriptionForm.condominium.id,
      condominium_name: descriptionForm.condominium.name,
      president: descriptionForm.president,
      secretary: descriptionForm.secretary
    }
    this.step += 1
  }

  saveHeader(descriptionForm: any) {
    this.getHeader(descriptionForm)
    this.step = 2
  }

  getQuestion(questionForm: any, cont: any) {

    let data = {}
    if (questionForm.questionD != null) {
      data = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        question: questionForm.descriptionQuestion,
        alternatives: [
          {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionA,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionB,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionC,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionD
          }
        ]
      }
    } else if (questionForm.questionC != null) {
      data = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        question: questionForm.descriptionQuestion,
        alternatives: [
          {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionA,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionB,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionC,
          }
        ]
      }
    } else if (questionForm.questionB != null) {
      data = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        question: questionForm.descriptionQuestion,
        alternatives: [
          {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionA,
          }, {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionB,
          }
        ]
      }
    } else if (questionForm.questionA != null) {
      data = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        question: questionForm.descriptionQuestion,
        alternatives: [
          {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            value: questionForm.questionA,
          },
        ]
      }
    }

    this.questions.push(data)
    if (cont) {
      this.step += 1
    }
  }

  schedleAssembly() {
    this.acting = true
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(listResidentUsers, {condominium_id: this.description.condominium_id}))).subscribe((item: any) => {
      let users: { condominium_id: any; user_phone: any; stage: any; can_send: any; user_name: any; user_id: any; }[] = []
      item.data.listResidentUsers.map((item: any) => {
        users.push({
          condominium_id: this.description.condominium_id,
          user_phone: item.phone,
          can_send: item.can_send,
          stage: environment.stage,
          user_name: item.name,
          user_id: item.id
        })
      })
      let data = {
        title: this.description.title,
        condominium_id: this.description.condominium_id,
        condominium_name: this.description.condominium_name,
        description: this.description.descriptionText,
        warn_date: this.hour.warn,
        initial_date: this.hour.init,
        final_date: this.hour.end,
        warn_message:this.warn_message,
        president: this.description.president,
        secretary: this.description.secretary,
        questions: this.questions,
        send: 'true',
        users: users
      }
      this.newAssembly(data)
    })
  }

  send_later() {
    this.acting = true

    let data = {
      title: this.description.title,
      condominium_id: this.description.condominium_id,
      condominium_name: this.description.condominium_name,
      description: this.description.descriptionText,
      initial_date: this.hour.init,
      final_date: this.hour.end,
      president: this.description.president,
      secretary: this.description.secretary,
      questions: this.questions,
      send: 'false',
      users: []
    }
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(newAssembly, data))).subscribe((item: any) => {
      this.step = 0
      this.acting = false
      this.openSnackBar('Assembléia agendada ')
      let link = '/assembly/send?0=' + item.data.newAssembly.StatusCode + '&1=' + this.description.condominium_id
      this.router.navigate([link])

    }, err => {
      this.openSnackBar('erro ao criar assembléia, tente novamente mais tarde')
      this.router.navigate(['assembly'])
    })

  }

  newAssembly(dataAssembly: any) {
    fromPromise(this.amplifyService.api().graphql(graphqlOperation(scheduleAssembly, dataAssembly))).subscribe((item: any) => {
      this.router.navigate(['assembly'])
      this.step = 0
      this.acting = false
      this.openSnackBar('Assembléia agendada ')
    }, err => {
      this.openSnackBar('erro ao criar assembléia, tente novamente mais tarde')
      this.router.navigate(['assembly'])
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 5000,
      panelClass: ['primary', 'color-ligth']
    });
  }

  editHeader() {
    this.step = 0
    this.editing = true
  }

  editQuestion(i: any, data: any): Promise<any> {
    this.step = 1
    this.editing = true
    this.questions.splice(i, 1)
    return data
  }

  sendAssembly(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(sendAssembly, data))).subscribe((item: any) => {
        resolve(item.data.sendAssembly)
        this.router.navigate(['assembly'])
      }, err => {
        reject(err)
      })
    })
  }

  listAssembly() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listAssembly))).subscribe((item: any) => {
        resolve(item.data.listAssembly)
      }, err => {
        reject(err)
      })
    })
  }

  getAssembly(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(getAssembly, {id: id}))).subscribe((item: any) => {
        resolve(item.data.getAssembly)
      }, err => {
        reject(err)
      })
    })
  }

  uploadPdf(data: any) {
    console.log(data)
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(uploadPdf, data))).subscribe((item: any) => {
        resolve(item.data.uploadPdf)
      }, err => {
        reject(err)
      })
    })
  }

  updateAssemby(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(updateAssemby, data))).subscribe((item: any) => {
        resolve(item.data.updateAssemby)
      }, err => {
        reject(err)
      })
    })
  }

  listAssemblyFiled() {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(listAssemblyFiled))).subscribe((item: any) => {
        console.log(item.data.listAssemblyFiled)
        resolve(item.data.listAssemblyFiled)
      }, err => {
        reject(err)
      })
    })
  }

  sendAta(data: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(scheduleAta, data))).subscribe((item: any) => {
        console.log(item.data.scheduleAta)
        resolve(item.data.scheduleAta)
      }, err => {
        reject(err)
      })
    })
  }

  resolveAssembly(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(resolveAssembly, {id: id}))).subscribe((item: any) => {
        resolve(item.data.resolveAssembly)
      }, err => {
        reject(err)
      })
    })
  }

  toFileAssembly(id: any) {
    return new Promise((resolve, reject) => {
      fromPromise(this.amplifyService.api().graphql(graphqlOperation(toFileAssembly, {id: id}))).subscribe((item: any) => {
        resolve(item.data.resolveAssembly)
      }, err => {
        reject(err)
      })
    })
  }

}
