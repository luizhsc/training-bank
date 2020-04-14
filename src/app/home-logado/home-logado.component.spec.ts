import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogadoComponent } from './home-logado.component';

describe('HomeLogadoComponent', () => {
  let component: HomeLogadoComponent;
  let fixture: ComponentFixture<HomeLogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
