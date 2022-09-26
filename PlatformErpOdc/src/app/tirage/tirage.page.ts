import { NewTirage } from './../newtirage';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsableserviceService } from './../responsableservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {

file:any
  options:FormGroup
  newtirage:NewTirage
  
  iduser: number;
  constructor(private service:ResponsableserviceService,private formB:FormBuilder,private htpp:HttpClient) {
   }

  ngOnInit() {
    this.options=this.formB.group({
      libelle_tirage:['',Validators.required],
      nbredepostulants:['',Validators.required],
      libelleliste:['',Validators.required],
      file:['',Validators.required],
    })
  }


  fileChange(e:any){
    this.file=e.target["files"][0]
  }



  ajoutTirage(){
    this.newtirage = this.options.value
    this.service.addtirage(this.newtirage.libelle_tirage,this.newtirage.idactivite,this.iduser,this.newtirage.libelleliste,this.newtirage.nbredepostulants,this.file).subscribe(
      data =>{
        this.options.reset();
      }
    )
  }  

}
