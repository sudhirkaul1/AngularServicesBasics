import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userService } from '../Services/user.service';

@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.css']
})
export class InactiveusersComponent implements OnInit {
  constructor(private userService :  userService){}

  inactiveusers: string[];

  ngOnInit(): void {
    this.inactiveusers = this.userService.inactiveusers;
  }

   onSetToActive(user: number){
      //this.userSetToActive.emit(user);
      this.userService.userSetToActive(user);
  }


}
