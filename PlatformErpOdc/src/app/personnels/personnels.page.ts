import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.page.html',
  styleUrls: ['./personnels.page.scss'],
})
export class PersonnelsPage implements OnInit {
  cp: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
