import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AddClientComponent } from "./components/gestionClient/add-client/add-client.component";
import { FicheClientComponent } from "./components/gestionClient/fiche-client/fiche-client.component";
import { ListeClientComponent } from "./components/gestionClient/liste-client/liste-client.component";
import { AddStaffComponent } from "./components/gestionStaff/add-staff/add-staff.component";
import { ListaStaffComponent } from "./components/gestionStaff/lista-staff/lista-staff.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Intercept } from "./services/security/intercept.service";
import { AppErrorHundler } from "./common/app-error-hundler";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarComponent } from "./components/calendar/calendar.component";

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { DonnesConstructionComponent } from "./donnes-construction/donnes-construction.component";
import { ExploitationComponent } from "./exploitation/exploitation.component";
import { Exploitation140Component } from "./exploitation/exploitation140/exploitation140.component";
import { Exploitation190Component } from "./exploitation/exploitation190/exploitation190.component";
import { Exploitation240Component } from "./exploitation/exploitation240/exploitation240.component";
import { Exploitation260Component } from "./exploitation/exploitation260/exploitation260.component";
import { Exploitation560Component } from "./exploitation/exploitation560/exploitation560.component";
import { Exploitation760Component } from "./exploitation/exploitation760/exploitation760.component";
import { Exploitation960Component } from "./exploitation/exploitation960/exploitation960.component";
import { Exploitation1120Component } from "./exploitation/exploitation1120/exploitation1120.component";
import { ConstructionComponent } from "./construction/construction.component";
import { Injection140Component } from "./construction/injection140/injection140.component";
import { Injection190Component } from "./construction/injection190/injection190.component";
import { Injection240Component } from "./construction/injection240/injection240.component";
import { Injection280Component } from "./construction/injection280/injection280.component";
import { Cogeneration560Component } from "./construction/cogeneration560/cogeneration560.component";
import { Cogeneration760Component } from "./construction/cogeneration760/cogeneration760.component";
import { Cogeneration960Component } from "./construction/cogeneration960/cogeneration960.component";
import { Cogeneration1120Component } from "./construction/cogeneration1120/cogeneration1120.component";
import { CapexComponent } from "./capex/capex.component";
import { OpexComponent } from "./opex/opex.component";
import { ChartsModule } from "ng2-charts";
import { AffichageComponent } from "./capex/affichage/affichage.component";
import { NavFicheComponent } from "./nav-fiche/nav-fiche.component";
import { ScenarioComponent } from "./scenario/scenario.component";
import { FicheProjetComponent } from "./fiche-projet/fiche-projet.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NewTestComponent } from "./new-test/new-test.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { VerifMailComponent } from "./verif-mail/verif-mail.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ListeProjetsComponent } from "./liste-projets/liste-projets.component";
import { ListeFournisseursComponent } from "./liste-fournisseurs/liste-fournisseurs.component";
import { ProfileClientComponent } from "./profile-client/profile-client.component";
import { BienvenuComponent } from "./bienvenu/bienvenu.component";
import { MessageComponent } from "./message/message.component";
import { TakwaComponent } from "./takwa/takwa.component";
import { ClientcommercialComponent } from "./message/clientcommercial/clientcommercial.component";
import { CommercialClientComponent } from "./message/commercial-client/commercial-client.component";
import { MapComponent } from "./map/map.component";

import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AddStaffComponent,
    ListaStaffComponent,
    AddClientComponent,
    ListeClientComponent,
    FicheClientComponent,
    CalendarComponent,
    DonnesConstructionComponent,
    ExploitationComponent,
    Exploitation140Component,
    Exploitation190Component,
    Exploitation240Component,
    Exploitation260Component,
    Exploitation560Component,
    Exploitation760Component,
    Exploitation960Component,
    Exploitation1120Component,
    ConstructionComponent,
    Injection140Component,
    Injection190Component,
    Injection240Component,
    Injection280Component,
    Cogeneration560Component,
    Cogeneration760Component,
    Cogeneration960Component,
    Cogeneration1120Component,
    CapexComponent,
    OpexComponent,
    AffichageComponent,
    NavFicheComponent,
    ScenarioComponent,
    FicheProjetComponent,
    LoginComponent,
    RegisterComponent,
    NewTestComponent,
    ForgotPasswordComponent,
    VerifMailComponent,
    ResetPasswordComponent,
    ListeProjetsComponent,
    ListeFournisseursComponent,
    ProfileClientComponent,
    BienvenuComponent,
    MessageComponent,
    TakwaComponent,
    ClientcommercialComponent,
    CommercialClientComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgZorroAntdModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHundler },
    { provide: HTTP_INTERCEPTORS, useClass: Intercept, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
