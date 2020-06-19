import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KzForumItemComponent } from './kz-forum-item.component';

describe('KzForumItemComponent', () => {
  let component: KzForumItemComponent;
  let fixture: ComponentFixture<KzForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KzForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KzForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
