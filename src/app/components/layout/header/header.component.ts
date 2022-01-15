import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  current_User;

  notifications = [];
  count = [];
    constructor(private auth:AuthService) { }

    ngOnInit(): void {
      this.auth.profile().subscribe((data:any)=>{
        this.current_User=data
        this.notifications = data.notifications.reverse();

       this.count = _.filter(this.notifications, ['read', false]);

        console.log("current_User",this.current_User);
      }


      )
    }

    TimeFromNow(time) {
      return moment(time).fromNow();
    }


    logout(){
      this.auth.logout();
    }


}
