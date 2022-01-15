import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgriService } from '../services/agri.service';
import { AuthService } from '../services/auth.service';
import Swal from "sweetalert2";
import * as moment from "moment";
@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.css']
})
export class ListeProjetsComponent implements OnInit {
  projets=[]
  current_User
  @ViewChild("exampleModal", { static: false }) exampleModal: ElementRef

formProjet:FormGroup
showSpinner=false


status:any=[
"Client En Quotation",

"Contrat Cadre",

"Client En Conception",

"Client En Construction",

"Client En service",
"Client En Abandon"
]



msgError=''
msgSuccess=""
submitted = false;
  constructor(private agriSRV:AgriService,private fb:FormBuilder,private authSrv:AuthService) { }

  ngOnInit() {
    this.authSrv.profile().subscribe((data:any)=>{
      this.current_User=data
      console.log("current_User",this.current_User);
    }
    )

this.formProjet=this.fb.group({
  status: ["",Validators.required],
  ref:["",Validators.required],
  acces:["",Validators.required],
  dateQuotation:[""],
  dateContrat :[""],
  dateDeConception:[""],
  dateConstruction:[""],
  dateEnService:[""],
  dateAbandon:[""],
  commentaire:["",Validators.required]
})

    this.getAllProjets()
    //REAL TIME 
    this.agriSRV.handlePostCreated().subscribe((data: any) => {
      this.getAllProjets()
    });
  }


   //PROJET
   createProjet() {
    this.submitted = true;

    let form=this.formProjet.value
    form.user_id=this.current_User._id

    this.showSpinner=true
this.agriSRV.createProjet(form).subscribe((data:any)=>{
    // if(data){
    //   this.msgError=''
    //   this.msgSuccess= `${data.msgsrv } `
    // }

  this.formProjet.reset();
  this.exampleModal.nativeElement.click();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.showSpinner=false;
    this.agriSRV.dispatchPostCreated(data._id);
   
    this.submitted = false;
  }, 500);
},(err)=>{
  if (err.error.msgsrv){
    this.msgSuccess= ''
    setTimeout(() => {
      this.msgError = err.error.msgsrv;
    }, 500);
  }
});




  }

  getAllProjets() {
    this.agriSRV.getAllProjets().subscribe((data:any)=>{
    this.projets=data
    });
  }

  deleteProjet(id){
console.log("deleteProjet",id);

Swal.fire({
  title: "Are you sure to delete this Project ?",
 
  showCancelButton: true,
  confirmButtonText: "Oui",
  cancelButtonText: "Non",
}).then((result) => {
  if (result.value) {
    this.agriSRV.deleteProjet(id).subscribe((data:any)=>{
      this.agriSRV.dispatchPostCreated(data);
      });
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  }
});


  }

  listenEtat(value:any) {
    console.log("event.target.value : ",  value);
    let d = Date.now();
    let date = moment(d).format("lll");
    enum DateTypes {
      dateQuotation = "Client En Quotation",
      dateContrat = "Contrat Cadre",
      dateDeConception = "Client En Conception",
      dateAbandon="Client En Abandon",
      dateConstruction = "Client En Construction",
      dateEnService = "Client En service",
    }

  
    this.formProjet.get("dateQuotation").setValue("");
    this.formProjet.get("dateEnService").setValue("");
    this.formProjet.get("dateDeConception").setValue("");
    this.formProjet.get("dateConstruction").setValue("");
    this.formProjet.get("dateContrat").setValue("");
    this.formProjet.get("dateAbandon").setValue("");
    const formControlName = Object.keys(DateTypes).find(
      (key) => DateTypes[key] === value
    );
    this.formProjet.get(formControlName).setValue(date);
  }
  
}
