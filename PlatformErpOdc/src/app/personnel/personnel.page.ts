import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
})
export class PersonnelPage implements OnInit {

  accueil = [
    {nom: "Mr Dembele", email:"idrissa@gmail.com"},
    {nom: "Mr SAGARA", email:"jean@gmail.com"},
    {nom: "Mr DIALLO", email:"abdoulaye@gmail.com"},
    {nom: "Mr DJENIKA", email:"abocar@gmail.com"},
    {nom: "Mr DJIGUIBA", email:"barema@gmail.com"},
    {nom: "Mr BORE", email:"souleymane@gmail.com"},
    {nom: "Mr DIAWARA", email:"karim@gmail.com"},
    {nom: "Mr BALLO", email:"ibrahim@gmail.com"},
    {nom: "Mr MAIGA", email:"abasse@gmail.com"},
    {nom: "Mr SENOU", email:"kalifa@gmail.com"},
    {nom: "Mr MALLE", email:"allassane@gmail.com"},
    {nom: "Mr TRAORE", email:"mary@gmail.com"},
  ]
  a!:any;
  constructor() { }

  ngOnInit() {
  }

}
