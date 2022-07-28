import { Component, OnInit } from '@angular/core';
import { userService } from '../Services/user.service';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {

activeusers: string[];

constructor(private userService: userService) { }

ngOnInit(): void {
  this.activeusers = this.userService.activeusers;
  }

  onSetInactive(user: number){

    this.userService.userSetToInactive(user);
  }

}
