import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziIndividualiComponent } from './servizi-individuali.component';

describe('ServiziIndividualiComponent', () => {
  let component: ServiziIndividualiComponent;
  let fixture: ComponentFixture<ServiziIndividualiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiziIndividualiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiziIndividualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
