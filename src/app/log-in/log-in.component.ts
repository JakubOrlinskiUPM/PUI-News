import {Component, OnInit, ViewChild} from '@angular/core';
import {LogInService} from "../services/log-in.service";


interface LogInData {
  username: string
  password: string
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  showSignIn: boolean = false;
  logInData: LogInData = {username: 'DEV_TEAM_02', password: '123502'};
  @ViewChild('loginForm') loginForm: any;

  constructor(private logInService: LogInService) {
  }

  ngOnInit(): void {
  }

  toggleSignIn() {
    this.showSignIn = !this.showSignIn;
  }

  logIn() {
    console.log("log in");
    this.logInService.login(this.logInData.username, this.logInData.password).subscribe(
      (res) => {
        console.log("success", res)
      }, (error) => {

      }, () => {

      })
  }
}
