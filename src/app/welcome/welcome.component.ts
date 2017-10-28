import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private userDataService: UserdataService) { }

  ngOnInit() {
  }

  loadData(userName: String) {
    this.userDataService.updateUser(userName);
    this.router.navigate(['graphs']);
  }

}
