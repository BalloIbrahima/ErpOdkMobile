import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting-participant',
  templateUrl: './reporting-participant.page.html',
  styleUrls: ['./reporting-participant.page.scss'],
})
export class ReportingParticipantPage implements OnInit {
a:any;
  constructor() { }
  accueil=[
    {nom:"ali"},
    {activite:"ndckc"},
  ]
  ngOnInit() {
  }

}
