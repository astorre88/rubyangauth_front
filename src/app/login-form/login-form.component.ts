import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {
  }

  onSignInSubmit(){

    // console.log(this.signInUser);
    // {
    //   "3ePTeaIQt5DtssV3LhlUfQ": {
    //     "token": "$2a$10$aCgEMct9w9nrtJTwhEiJhenUAnbfOqqeFcIerqQNEzeLwthX.K4TS",
    //     "expiry": 1499059603,
    //     "last_token": "$2a$10$At4HX0NCbZCS6mYGTBU1JutIzn00vB3PnVGa07qkrYN2sis2Vu4Cu",
    //     "updated_at": "2017-06-19T08:26:43.000+03:00"
    //   }
    // }

    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

        res => {
          if(res.status == 200){
            this.onFormResult.emit({signedIn: true, res});
          }
        },

        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    )

  }

}
