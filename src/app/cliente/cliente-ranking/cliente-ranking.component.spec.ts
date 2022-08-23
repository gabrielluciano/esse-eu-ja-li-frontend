import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRankingComponent } from './cliente-ranking.component';

describe('ClienteRankingComponent', () => {
  let component: ClienteRankingComponent;
  let fixture: ComponentFixture<ClienteRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
