import {Component, OnInit, ViewChild} from '@angular/core';
import {LogInService} from "../services/log-in.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


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

  error: string | null = null;

  constructor(public logInService: LogInService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  toggleSignIn() {
    this.showSignIn = !this.showSignIn;
  }

  logIn() {
    console.log("log in");
    this.logInService.login(this.logInData.username, this.logInData.password).subscribe(
      (user) => {
        this.modalService.dismissAll();
      },
      (error) => {
        if (error) {
          this.error = 'Wrong credentials. Please try again.';
        } else {
          this.error = 'Something went wrong.';
        }
      }, () => {

      })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

}
