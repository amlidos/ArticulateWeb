import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserdataService } from '../userdata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private userDataService: UserdataService) { }

  ngOnInit() {
  }

  loadData(user) {
    this.userDataService.updateUser(user);
    this.router.navigate(['graphs']);
  }

}
