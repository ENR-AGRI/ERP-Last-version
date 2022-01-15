import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AgriService } from 'src/app/services/agri.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  clients;
  clientFilter
  current_User
  matricule



  constructor(private agriSrv:AgriService,private auth:AuthService,private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {

    this.getCurrentUser()

    this.getAllCients();
    this.agriSrv.handlePostCreated().subscribe((data: any) => {
      this.getAllCients();
    });

  }



  getCurrentUser(){
    this.auth.profile().subscribe((data:any)=>{
      this.current_User=data

      console.log("current_User",this.current_User);

    })
  }

  getAllCients() {
    this.agriSrv.getAllCients().subscribe((data: any) => {
     this.clients = data
      console.log("clients", this.clients);
    });
  }

  delete(client){

    Swal.fire({
      title: "<h6 style='color:red'>" +
      `Voulez vous supprimer ${client.nom} ${client.prenom}
      avec la matricule ${client.matricule} ?`+"</h6>",
      text: "",

      showCancelButton: true,
      confirmButtonColor: '#00ae81',
      cancelButtonColor: '#566787',
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.value) {
        this.agriSrv.delete(client._id).subscribe((data:any)=>{
          this.agriSrv.dispatchPostCreated(data);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // $("#change_password").modal("hide");
        // Swal.fire("Anuuler", "Votre modification est annulé :)", "error");
      }
    });



  }


  addClient(f){
  this.agriSrv.addClient(f.value).subscribe((data:any)=>{
    this.showTRwhenADD=false
    this.agriSrv.dispatchPostCreated(data);
})
  }


showEdit
showEditInput(c,i){
this.showEdit=i
this.nom=c.nom
this.prenom=c.prenom
this.email=c.email
this.tel=c.tel
}

  tel
  nom
  prenom
  email

  editClient(c,i){
 console.log("client",c);
let body={
  nom:this.nom,
  prenom:this.prenom,
  email:this.email,
  tel:this.tel
}
this.agriSrv.updateClient(c._id,body).subscribe((data:any)=>{
this.showEdit=null
  this.agriSrv.dispatchPostCreated(data);
})
  }

  showTRwhenADD:Boolean=false

  addRowToTable(){
  this.showTRwhenADD=true
  }

  _deleteRow(){
    this.showTRwhenADD=false
  }
  deleteEditRow(i){
    this.showEdit=null
  }
/*

*/



  filterClient(value) {
    if (value) {
      this.clientFilter = this.clients.filter((x) => x.nom == value);
    } else this.clientFilter = this.clients;
    console.log("clientFilter", this.clientFilter);
    console.log("value", value);
  }
  sendMsgToClient(idClient){
    this.router.navigate(['/commercialmessage',idClient])

  }
}
