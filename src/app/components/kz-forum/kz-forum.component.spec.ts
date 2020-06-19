import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KzForumComponent } from './kz-forum.component';

describe('KzForumComponent', () => {
  let component: KzForumComponent;
  let fixture: ComponentFixture<KzForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KzForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KzForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
