import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTirageDuneListePage } from './detail-tirage-dune-liste.page';

describe('DetailTirageDuneListePage', () => {
  let component: DetailTirageDuneListePage;
  let fixture: ComponentFixture<DetailTirageDuneListePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTirageDuneListePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTirageDuneListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
