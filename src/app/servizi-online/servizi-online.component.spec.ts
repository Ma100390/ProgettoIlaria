import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziOnlineComponent } from './servizi-online.component';

describe('ServiziOnlineComponent', () => {
  let component: ServiziOnlineComponent;
  let fixture: ComponentFixture<ServiziOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiziOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiziOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
