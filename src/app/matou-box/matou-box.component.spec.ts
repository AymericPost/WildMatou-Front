import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatouBoxComponent } from './matou-box.component';

describe('MatouBoxComponent', () => {
  let component: MatouBoxComponent;
  let fixture: ComponentFixture<MatouBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatouBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatouBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
