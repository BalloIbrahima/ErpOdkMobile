import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creer-activites',
  templateUrl: './creer-activites.page.html',
  styleUrls: ['./creer-activites.page.scss'],
})
export class CreerActivitesPage implements OnInit {

  
  SallesDispo:any;
  Entites:any;
  UsersActives:any;
  TypeActivite:any;


  typeentite:any;
  nomActivite:any;
  duree:any;

  isFormation:Boolean;
  isTalk:Boolean;
  isEvenement:Boolean;

  message:String;
  erreur:Boolean;
  fichier:any

  Salle:any;
  Type:any;
  lead:any;

  typeactivite:String;
  libellesalle:String;
  leadNomPrenom:String;

  date:Date;
  datedebut:Date;
  dateFin:Date;

  Utilisateur:any;
  fg:FormGroup;
  constructor(private router:Router, private salleService:SalleServiceService,private userService:UtilisateurService,private typeActiviteService:TypeActiviteService,
    private activiteService:ActiviteService, private http:HttpClient,
    private formB:FormBuilder) { }

  ngOnInit() {
    
    

     this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
     console.log("recuperation de l'utilisateur "+this.Utilisateur)
    this.ActiviteChange()
    this.salleService.getAllDispo().subscribe(data=>{
      
        this.SallesDispo=data
        console.log(data)
      
    })

    this.typeActiviteService.getListe().subscribe(data=>{
      if(data.message=='ok'){
        this.TypeActivite=data.data
        console.log(this.TypeActivite)

      }
    })

    this.userService.getActivesUsers().subscribe(data=>{
      if(data.message=='ok'){
        this.UsersActives=data.data
        console.log(this.UsersActives)

      }
    })

   
    this.salleService.ToutEntite().subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.fg=this.formB.group({
      typeentite:['',Validators.required],
      responsables:['',Validators.required],

      typeActivite:['',Validators.required],

      file:['',Validators.required],

      dateDebut:['',Validators.required],

      nom:['',Validators.required],

      dateFin:['',Validators.required],

      description:['',Validators.required],
      salles:['',Validators.required],

      libelleentite:['',Validators.required],


      leadNomPrenom :['',Validators.required],


      libelle :['',Validators.required],
      lead :['',Validators.required],


    })


  }



  CreerActivite(){
    
    var idSalle=0;
    var idType=0;
    //recuperation de l'id sz la salle
    for(let i=0 ; i<this.SallesDispo.length; i++){
      if(this.SallesDispo[i].libelle==this.libellesalle){
        idSalle=this.SallesDispo[i].id
      }
    }

    //recuperation de l'id du type
    for(let i=0 ; i<this.TypeActivite.length; i++){
      if(this.TypeActivite[i].libelle==this.typeactivite){
        idSalle=this.TypeActivite[i].id
      }
    }

    //recuperation de l'id du lead
     for(let i=0 ; i<this.UsersActives.length; i++){
      console.log(this.leadNomPrenom)
      const array=this.leadNomPrenom.split(' ')

      if(this.UsersActives[i].prenom==array[0] && this.UsersActives[i].nom==array[1]){   
        this.lead=this.UsersActives[i]
      }
    }

    //creation de l'activite
    var activite={
      "nom":this.nomActivite,
      "dateDebut":this.datedebut,
      "dateFin":this.dateFin,
      "description":"zz",
      "leader":this.lead,
      "utilisateurs":[this.lead]
    }

    this.activiteService.Creer(this.Utilisateur.id,idSalle,idType,this.fichier,activite).subscribe(data=>{
      console.log(data)
      this.fg.reset();
    })
  }


  ////
  ActiviteChange(){
    console.log(this.typeactivite)
    if(this.typeactivite=="Talk"){
      this.isTalk==true
      this.isEvenement==false
      this.isFormation==false
    }else if(this.typeactivite=="Evenement"){
      this.isTalk==false
      this.isEvenement==true
      this.isFormation==false
    }else if(this.typeactivite=="Formations"){
      this.isTalk==false
      this.isEvenement==false
      this.isFormation==true
    }
  }


  //fichier selection
  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir une image !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(typeFichier.match(/image\/*/)==null){
      this.message="Seul les images sont suportées";
  
      return;

    }



    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.fichier=e.target['files'][0];
      }
    }
   }

}
