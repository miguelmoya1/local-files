import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTreeComponent } from './draw-tree.component';

describe('DrawTreeComponent', () => {
  let component: DrawTreeComponent;
  let fixture: ComponentFixture<DrawTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
