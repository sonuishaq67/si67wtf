import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha1CComponent } from './sha1-c.component';

describe('Sha1CComponent', () => {
  let component: Sha1CComponent;
  let fixture: ComponentFixture<Sha1CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sha1CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sha1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
