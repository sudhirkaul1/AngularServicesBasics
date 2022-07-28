import { Component } from '@angular/core';
import { counterService } from './Services/counter.service';
import { userService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userService
             ]
})
export class AppComponent {

}
