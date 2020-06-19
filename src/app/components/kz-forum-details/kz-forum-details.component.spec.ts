import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KzForumDetailsComponent } from './kz-forum-details.component';

describe('KzForumDetailsComponent', () => {
  let component: KzForumDetailsComponent;
  let fixture: ComponentFixture<KzForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KzForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KzForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
