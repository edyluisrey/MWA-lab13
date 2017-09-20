import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StundentComponent } from './stundent.component';

describe('StundentComponent', () => {
  let component: StundentComponent;
  let fixture: ComponentFixture<StundentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StundentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StundentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
