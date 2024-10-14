import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSidebarComponent } from './icon-sidebar.component';

describe('IconSidebarComponent', () => {
  let component: IconSidebarComponent;
  let fixture: ComponentFixture<IconSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
