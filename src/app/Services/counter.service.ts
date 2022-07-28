import { Injectable } from "@angular/core";

@Injectable()
export class counterService{
  ActiveToInactiveCounter: number = 0;
  InactiveToActiveCounter: number = 0;


 setActiveToInactiveCounter(){
  this.ActiveToInactiveCounter = this.ActiveToInactiveCounter + 1;
  console.log(this.ActiveToInactiveCounter);
 }



 setInactiveToActiveCounter(){
  this.InactiveToActiveCounter = this.InactiveToActiveCounter + 1;
  console.log(this.InactiveToActiveCounter);
 }
}
