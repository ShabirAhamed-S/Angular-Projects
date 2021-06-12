import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadingsComponent } from './topheadings.component';

describe('TopheadingsComponent', () => {
  let component: TopheadingsComponent;
  let fixture: ComponentFixture<TopheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
