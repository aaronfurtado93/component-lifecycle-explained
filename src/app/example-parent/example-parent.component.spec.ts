import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleParentComponent } from './example-parent.component';

describe('ExampleParentComponent', () => {
  let component: ExampleParentComponent;
  let fixture: ComponentFixture<ExampleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
