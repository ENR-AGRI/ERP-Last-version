import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import _ from 'lodash';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-commercial-client',
  templateUrl: './commercial-client.component.html',
  styleUrls: ['./commercial-client.component.css']
})
export class CommercialClientComponent implements OnInit {


  current_User;

  notifications = [];
  count = [];

  selectedUser//hetha li ana bech na7ki m3eh



  formSendMessageToClient:FormGroup
    constructor(private auth:AuthService,private fb:FormBuilder) { }

    ngOnInit(): void {
      this.auth.profile().subscribe((data:any)=>{
        this.current_User=data
        this.notifications = data.notifications.reverse();

       this.count = _.filter(this.notifications, ['read', false]);

        console.log("current_User",this.current_User);
      }


      )


      this.formSendMessageToClient=this.fb.group({

        message:""
      })
    }

    TimeFromNow(time) {
      return moment(time).fromNow();
    }

    //bech te5ter l3eb libech tchouf desc binetkom
    selectedUserDetails
    showFormReponce=false
    index
  openMsg(notif,index?) {

    //ta5eth l user li inti 5tertou w m3adih mil html bil function click w bihou kif
    //te3mel open tnejem tjib l info liteb3in l yuser
    this.selectedUser = notif.senderId

    this.selectedUserDetails=notif
    console.log("selectedUser", this.selectedUser,index);
    this.markNotification(notif._id)
     this.showFormReponce=false
     this.index=index

  }


  markNotification(notifID){
    this.auth.MarkNotification(notifID).subscribe((data)=>{

    })
  }

  repondre(notif,index){
    console.log("index",index);
    index===this.index ?
    this.showFormReponce=true
    :
    this.showFormReponce=false
  }
    logout(){
      this.auth.logout();
    }




    sendMessageToClient(){


      let body={
        message:this.formSendMessageToClient.value.message,
        id:this.selectedUser
      }

      console.log("boooody",body);

      this.auth.messageToRepOrToClient(body).subscribe((data)=>{

      })
    }

}
