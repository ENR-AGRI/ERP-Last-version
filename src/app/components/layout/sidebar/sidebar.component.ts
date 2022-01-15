import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@ViewChild("sidebar",{ static: false }) sidebar:ElementRef
  isAdmin:boolean=false
  isUser:Boolean=false
  isCommercial:Boolean=false
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

    let user=this.auth.getDecodedToken()
    console.log("Currrentuseeer",user);

if(user.role==="Admin"){
  this.isAdmin=true;

}
else{

this.isAdmin=false

  }

  if(user.role==="Client"){
    this.isUser=true;

  }
  else{

  this.isUser=false

    }

    if(user.role==="REP"){
      this.isCommercial=true;

    }
    else{

    this.isCommercial=false

      }








}
TimeFromNow(time) {
  return moment(time).fromNow();
}


hide(){
  this.sidebar.nativeElement.style.display="none"
}
show(){
  this.sidebar.nativeElement.style.display="block"
}
logout(){
  this.auth.logout();
}
}
