import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import _ from "lodash";
import * as moment from "moment";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  @ViewChild("sidebar", { static: false }) sidebar: ElementRef;
  //declaration des trois roles possible et initialiser en false au début
  isAdmin: boolean = false;
  isUser: Boolean = false;
  isCommercial: Boolean = false;
  //declaration des variables q'on va appeler dans le html pour l'afficher
  current_User;
  //table des notifications
  notifications = [];
  //nombre des notification réçu
  count = [];
  //injecter le service dans le constructeur
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    //get the current user
    this.auth.profile().subscribe((data: any) => {
      this.current_User = data;
      //get notification from table user et afficher de plus récent au plus ancien
      this.notifications = data.notifications.reverse();
      //le nombre de notification non vue
      this.count = _.filter(this.notifications, ["read", false]);
    });
    //obtenir le role from le token ; on decode le token pour avoir quel est
    //le role de user connecté
    let user = this.auth.getDecodedToken();

    if (user.role === "Admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    if (user.role === "Client") {
      this.isUser = true;
    } else {
      this.isUser = false;
    }

    if (user.role === "REP") {
      this.isCommercial = true;
    } else {
      this.isCommercial = false;
    }
  }
  //fonction qui retourne le temps qui coule à partir que  l'utilisateur reçue le notification
  //exemple notification réçu  il ya 3 min ..
  TimeFromNow(time) {
    return moment(time).fromNow();
  }
  // cacher le menu
  hide() {
    this.sidebar.nativeElement.style.display = "none";
  }
  //afficher le menu
  show() {
    this.sidebar.nativeElement.style.display = "block";
  }
  //fonction pour appeler la fonction se deconnecter
  logout() {
    this.auth.logout();
  }
}
