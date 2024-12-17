import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremierComponent } from './mon-premier.component';

describe('MonPremierComponent', () => {
  let component: MonPremierComponent;
  let fixture: ComponentFixture<MonPremierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonPremierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonPremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
