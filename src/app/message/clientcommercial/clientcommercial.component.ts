import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import _ from 'lodash';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from '@angular/router';
import { AgriService } from 'src/app/services/agri.service';
@Component({
  selector: 'app-clientcommercial',
  templateUrl: './clientcommercial.component.html',
  styleUrls: ['./clientcommercial.component.css']
})
export class ClientcommercialComponent implements OnInit {

  current_User;

  notifications = [];
  count = [];

  selectedUser//hetha li ana bech na7ki m3eh
id;


  formSendMessageToClient:FormGroup
    constructor(private auth:AuthService,
      private fb:FormBuilder,
      private toastr:ToastrService,
      private route:ActivatedRoute,
      private agriSrv:AgriService) { }

    ngOnInit(): void {
      this.auth.profile().subscribe((data:any)=>{
        this.current_User=data
        this.notifications = data.notifications.reverse();

       this.count = _.filter(this.notifications, ['read', false]);

        console.log("current_User",this.current_User);

      }


      )

      this.getSentmsgbyCommercial()
      this.formSendMessageToClient=this.fb.group({

        message:""
      })
      this.id=this.route.snapshot.paramMap.get('id')

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

if(this.id){
  this.selectedUser=this.id
}

      let body={
        message:this.formSendMessageToClient.value.message,
        id:this.selectedUser
      }

      console.log("boooody",body);

      this.auth.messageToRepOrToClient(body).subscribe((data)=>{

            if (data) this.toastr.success("Votre mssage est envoyé avec succés");
            console.log("data error", data);
            this.formSendMessageToClient.reset();

      })
    }

getReception(){
  //GET ALL CLIENT IDCOMMERCIAL

}


notifs
msg
notif
getSentmsgbyCommercial(){
  this.agriSrv.getAllCients().subscribe((data: any) => {

    this.notifs=data.map((x)=>{
      return x.notifications
    })


}

  )}

}
