import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-bienvenu",
  templateUrl: "./bienvenu.component.html",
  styleUrls: ["./bienvenu.component.css"],
})
export class BienvenuComponent implements OnInit {
  //declaration des variables
  messageForm: FormGroup;
  current_User;
  msgError = "";
  msgSuccess = "";
  submitted = false;
  //constructeur ou on injecte les services
  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //initialisation de formulaire
    this.messageForm = this.fb.group({
      subject: ["", [Validators.required, Validators.maxLength(50)]],
      message: ["", [Validators.required, Validators.maxLength(1000)]],
    });
    //appelle de la methode profile dans le services authSrv pour obtenir qui le  user connecté
    this.authSrv.profile().subscribe((data: any) => {
      this.current_User = data;
    });
  }
  //envoyer un message de contact au admin ou commerciale
  sendMessage() {
    this.submitted = true;
    let form = this.messageForm.value;
    form.email = this.current_User.email;
    form.user_id = this.current_User._id;
    console.log("form message", form);
    if (this.messageForm.valid)
      this.authSrv.sendMessage(form).subscribe(
        (data: any) => {
          if (data) {
            this.msgError = "";
            //reset le formulaire aprés deux seconde
            setTimeout(() => {
              this.msgSuccess = `${data.msgsrv} `;
              this.submitted = false;
              this.messageForm.reset();
            }, 2000);
          }
          //if (data) this.toastr.success(data.msgsrv);
          // console.log("data error", data.msgsrv);
          // this.formClient.reset();
        },
        (err: any) => {
          if (err.error.msgsrv) {
            this.msgSuccess = "";
            setTimeout(() => {
              this.msgError = err.error.msgsrv;
            }, 500);
          }
        }
      );
  }
  //controle de champ
  get fnSubject() {
    return this.messageForm.get("subject");
  }
  //controle de champ
  get fnMesage() {
    return this.messageForm.get("message");
  }
}
