import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {from as fromPromise} from 'rxjs';
import {Auth, API, graphqlOperation} from "aws-amplify";
import {Router} from "@angular/router";
import {AmplifyService} from "aws-amplify-angular";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  icon = 'eye-closed'
  hide = 'password'
  needChangePassword = false
  newPassword = false
  email: any
  password: any
  error = false
  errorMessage = ''
  loading = false
  redefineStatus = 0

  regex = /\W|_/;
  num = /[0-9]/;
  mai = /[A-Z]/;
  min = /[a-z]/;

  loginForm: FormGroup = new FormGroup({});
  redefineForm: FormGroup = new FormGroup({});
  newPasswordForm: FormGroup = new FormGroup({});
  confirmNewPasswordForm: FormGroup = new FormGroup({});

  private cognitoUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private amplifyService: AmplifyService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.redefineForm = this.formBuilder.group({
      email: this.email,
      oldPassword: this.password,
      newPassword: new FormControl('', [Validators.minLength(8)]),
      newPasswordConfirm: new FormControl('', [Validators.minLength(8)])
    })
    this.newPasswordForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required])
    })
    this.confirmNewPasswordForm = this.formBuilder.group({
      code: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmNewPassword: new FormControl(null, [Validators.minLength(8)])
    })
  }

  openSnackBar(message: string) {
    console.log('acabei com essa merda de snack bar')
  }

  ngOnInit(): void {
    Auth.signOut().then(() => {
    });
  }

  onSubmit() {
    const loginObject = this.loginForm.getRawValue();
    const newPass = this.redefineForm.getRawValue();
    this.email = loginObject.email.toLowerCase()
    this.email = this.email.trim()
    this.password = loginObject.password

    if (!this.needChangePassword) {
      this.doLogin(this.email, loginObject.password);
    } else {
      this.changeFirstPassword(newPass.newPassword);
    }
  }

  /**
   * Efetua login
   * @param email email do usuario
   * @param password senha do usuario
   * */
  doLogin(email: string, password: string) {
    this.loading = true
    fromPromise(Auth.signIn(email, password)).subscribe(
      user => {
        console.log(user)
        this.cognitoUser = user;
        if (this.cognitoUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
          this.loading = false
          this.needChangePassword = true;
          this.hide = 'password'
        } else {
          {
            this.router.navigate(['']);
          }
        }
      }
      , (error: any) => {
        console.log(error)
        this.loading = false
        switch (error.code) {
          case 'UserNotFoundException': {
            this.openSnackBar('Usuário não encontrado.')
            break;
          }
          case 'NotAuthorizedException': {
            switch (error.message) {
              case 'User is disabled':
                this.openSnackBar('Usuário desabilitado.')
                break;
              case 'Password attempts exceeded':
                this.openSnackBar('Tentativas de senha excedidas')
                break;
              case 'User tab-account has expired, it must be reset by an administrator.':
                this.openSnackBar('Sua conta expirou. Contate o suporte.')
                break;

              default:
                this.openSnackBar('Usuário ou senha incorreto.')
                this.loginForm.controls['password'].setValue(null);
                break;
            }
            break;
          }
          case 'InvalidParameterException': {
            this.openSnackBar('Algo inesperado ocorreu, contate o suporte.')
            break;
          }
          default: {
            break;
          }
        }
        this.error = true
      }
    )
  }

  /**
   * faz a troca obrigatorio da senha temporaria
   * @param newPassword nova senha
   */
  private changeFirstPassword(newPassword: string) {
    fromPromise(this.amplifyService.auth().completeNewPassword(this.cognitoUser, newPassword))
      .subscribe(user => {
          this.router.navigate(['']);
        },
        error => {
          this.openSnackBar('Algo inesperado ocorreu, contate o suporte.')
        });
  }

  redefinePassword() {
    this.newPassword = true
  }

  sendCode() {
    fromPromise(Auth.forgotPassword(this.newPasswordForm.getRawValue()['email'])).subscribe(item => {
      this.redefineStatus = 1
      this.hide = 'password'
    })
  }

  confirmNewPassword() {
    let email = this.newPasswordForm.getRawValue()['email']
    let code = this.confirmNewPasswordForm.getRawValue()['code']
    let newPassword = this.confirmNewPasswordForm.getRawValue()['newPassword']
    fromPromise(Auth.forgotPasswordSubmit(email, code, newPassword)).subscribe(item => {
      this.redefineStatus = 0
      this.needChangePassword = false
      this.hide = 'password'
      this.newPassword = false
      this.openSnackBar('Senha alterada com sucesso')
    }, error => {
      this.redefineStatus = 0
      this.hide = 'password'
      this.openSnackBar('Houve um problama ao recuperar a senha, tente novamente')
    })
  }

  toglePassView(event: any) {
    if (this.hide == 'password') {
      this.icon = 'eye-open'
      this.hide = 'text'
    } else {
      this.icon = 'eye-closed'
      this.hide = 'password'
    }
  }

  back() {
    this.newPassword = false
    this.needChangePassword = false
    this.redefineStatus = 0
  }

  checkPass() {
    if (
      this.min.test(this.redefineForm.getRawValue()['newPassword']) &&
      this.num.test(this.redefineForm.getRawValue()['newPassword']) &&
      this.regex.test(this.redefineForm.getRawValue()['newPassword']) &&
      this.redefineForm.getRawValue()['newPassword'].length >= 8 &&
      this.redefineForm.getRawValue()['newPassword'] == this.redefineForm.getRawValue()['newPasswordConfirm']
    ) {
      return true
    } else {
      return false
    }
  }

  print() {
  }
}
