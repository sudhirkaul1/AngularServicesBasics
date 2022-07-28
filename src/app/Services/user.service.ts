import { Injectable } from "@angular/core";
import { counterService } from "./counter.service";


@Injectable()
export class userService{
 constructor(private counterService: counterService){}

 activeusers = ['Sudhir','Renu'];
  inactiveusers   = ['Jackson','Peter'];

  userSetToInactive(id: number){
    this.inactiveusers.push(this.activeusers[id]);
    this.activeusers.splice(id,1);
    this.counterService.setActiveToInactiveCounter();
  }

  userSetToActive(id: number){
    this.activeusers.push(this.inactiveusers[id]);
    this.inactiveusers.splice(id,1);
    this.counterService.setInactiveToActiveCounter();
  }



}
