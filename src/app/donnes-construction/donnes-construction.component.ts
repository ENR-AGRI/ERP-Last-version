import { Component, OnInit } from "@angular/core";
import { AgriService } from "../services/agri.service";

@Component({
  selector: "app-donnes-construction",
  templateUrl: "./donnes-construction.component.html",
  styleUrls: ["./donnes-construction.component.css"],
})
export class DonnesConstructionComponent implements OnInit {
  conceptions;
  id;
  constructor(private agriSrv: AgriService) {}

  ngOnInit() {
    this.id = "6143111c334f7f25883b8b4f";
    this.getDataConstruction();

    console.log("id", this.id);
  }

  isNanFunction(val) {
    return isNaN(val) ? 0 : parseFloat(val);
  }
  readFromUserElseFromBase(redByUser, redFromBase) {
    return redByUser
      ? this.isNanFunction(redByUser)
      : this.isNanFunction(redFromBase);
  }

  isNullOrVideGetFromBase(val, valueFromBase) {
    if (val == null || val == "") return this.isNanFunction(valueFromBase);

    return this.readFromUserElseFromBase(val, valueFromBase);
  }
  //afficher data conception from database

  getDataConstruction() {
    this.agriSrv.getDataConstruction().subscribe((data) => {
      this.conceptions = data;
      this.id = this.conceptions[0]._id;
      console.log("data-conceptions", data);
    });
  }

  //1----- Interet_porteur_projet
  Interet_porteur_projet: any = {
    Etude_preleminaire_biomasse: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rapport_prefaisabilite: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Impact_economique_exploitant: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Bilan_agronomique_sols: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Apres_Avis_favorable_Creation_SPV: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  totaux_SS_traitance_Total;
  totaux_marge_Total;
  totaux_prixVente_Total;
  // sommeDeMarge() {
  //  return this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
  //     this.produit2(
  //       parseFloat(
  //         this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
  //       ),
  //       parseFloat(
  //         this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent.replace(
  //           "%",
  //           ""
  //         )
  //       ) / 100
  //     ) +
  //     parseFloat(
  //       this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro
  //     );
  // }

  sommeDeMarge() {
    let ssTraitance =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .SS_Traitance
        ));

    let margePercent =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_euro
        ));

    this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    console.log(
      "somme de merge ",
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale
    );

    return this.readFromUserElseFromBase(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale,
      this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
        .marge_totale
    );
  }

  somme_privVente() {
    let ssTraitance =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .SS_Traitance
        ));

    var marge_totale =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale,
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale
        ));

    this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
      ssTraitance + marge_totale;
    console.log(
      "somme de merge ",
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep
    );
    return this.Interet_porteur_projet.Etude_preleminaire_biomasse
      .Prix_vente_Concep;
  }

  sommeDeMarge2() {
    let ssTraitance =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .SS_Traitance
        ));

    let margePercent =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_euro
        ));

    this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    console.log(
      "somme de merge ",
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale
    );
    return this.readFromUserElseFromBase(
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale,
      this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
        .marge_totale
    );
  }
  somme_privVente2() {
    let ssTraitance =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .SS_Traitance
        ));

    var marge_totale =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_totale
        ));

    this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep
    );
  }

  sommeDeMarge3() {
    let ssTraitance =
      (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.SS_Traitance
        ));

    let margePercent =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_percent =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant
            .marge_percent,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.marge_euro
        ));

    this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.readFromUserElseFromBase(
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale,
      this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
        .marge_totale
    );
  }

  somme_privVente3() {
    let ssTraitance =
      (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.SS_Traitance
        ));

    var marge_totale =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
        this.isNanFunction(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale
        ));

    this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep
    );
  }

  sommeDeMarge4() {
    let ssTraitance =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
        this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
        ));

    let margePercent =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent =
        this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro =
        this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro
        ));

    this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale
    );
  }
  somme_privVente4() {
    let ssTraitance =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
        this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
        ));

    var marge_totale =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
        this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale
        ));

    this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep
    );
  }
  sommeDeMarge5() {
    let ssTraitance =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
        this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .SS_Traitance
        ));

    let margePercent =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_percent =
        this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro =
        this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_euro
        ));

    this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale
    );
  }
  somme_privVente5() {
    let ssTraitance =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
        this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .SS_Traitance
        ));

    var marge_totale =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
        this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_totale
        ));

    this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .Prix_vente_Concep
    );
  }

  someMargeTotaux() {
    let marge_totale_etu_pre_bio =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_totale
        ));

    let marge_totale_rapp_pre =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_totale
        ));
    let marge_totale_impact =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.marge_totale
        ));
    let marge_totale_bilanAgro =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale,
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .marge_totale
        ));

    let marge_totale_apres_avis_favo =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_totale,
          this.conceptions[0].Interet_porteur_projet
            .Apres_Avis_favorable_Creation_SPV.marge_totale
        ));

    return (this.Interet_porteur_projet.Marge_totaux =
      marge_totale_etu_pre_bio +
      marge_totale_rapp_pre +
      marge_totale_impact +
      marge_totale_bilanAgro +
      marge_totale_apres_avis_favo);

    // else {
    //   return (this.Interet_porteur_projet.Marge_totaux =
    //     this.Interet_porteur_projet.Marge_totaux.toString() + ".00");
    // }
  }

  sommeSoutraitanceTotaux() {
    let sstrFromConception = this.conceptions[0]
      ? this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .SS_Traitance
      : undefined;
    let SS_Traitance_etu_pre_bio =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .SS_Traitance
        ));

    let SS_Traitance_rapp_pre =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .SS_Traitance
        ));
    let SS_Traitance_impact =
      (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.SS_Traitance
        ));
    let SS_Traitance_bilanAgro =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance,
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .SS_Traitance
        ));

    let SS_Traitance_apres_avis_favo =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .SS_Traitance,
          this.conceptions[0].Interet_porteur_projet
            .Apres_Avis_favorable_Creation_SPV.SS_Traitance
        ));

    return (this.Interet_porteur_projet.Sous_Total_Conception =
      SS_Traitance_etu_pre_bio +
      SS_Traitance_rapp_pre +
      SS_Traitance_impact +
      SS_Traitance_bilanAgro +
      SS_Traitance_apres_avis_favo);
  }

  somePrixDeVneteTotaux() {
    let Prix_vente_Concep_etu_pre_bio =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse
            .Prix_vente_Concep,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .Prix_vente_Concep
        ));

    let Prix_vente_Concep_rapp_pre =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .Prix_vente_Concep
        ));
    let Prix_vente_Concep_impact =
      (this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant
            .Prix_vente_Concep,
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.Prix_vente_Concep
        ));
    let Prix_vente_Concep_bilanAgro =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep,
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .Prix_vente_Concep
        ));
    let Prix_vente_Concep_apres_avis_favo =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .Prix_vente_Concep,
          this.conceptions[0].Interet_porteur_projet
            .Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep
        ));
    return (this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep =
      Prix_vente_Concep_etu_pre_bio +
      Prix_vente_Concep_rapp_pre +
      Prix_vente_Concep_impact +
      Prix_vente_Concep_bilanAgro +
      Prix_vente_Concep_apres_avis_favo);
  }

  sendInteret(value) {
    //let id = this.conceptions[0]._id;
    //concatination
    //let val = value;

    //let val = value;
    console.log("value", value);

    let idData = this.conceptions[0] ? this.conceptions[0]._id : undefined;
    this.agriSrv.SubmitDataConception(value, idData).subscribe((data) => {
      console.log("data send ");
      this.getDataConstruction();
    });
  }

  /******* PRODUIT QUOTAION */
  produit(x, y, z) {
    return x * y * z;
  }
  produit2(x, y) {
    return x * y;
  }
  quotion(x, y) {
    return x / y;
  }
}
