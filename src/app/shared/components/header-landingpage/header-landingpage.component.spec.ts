import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLandingpageComponent } from './header-landingpage.component';

describe('HeaderLandingpageComponent', () => {
  let component: HeaderLandingpageComponent;
  let fixture: ComponentFixture<HeaderLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLandingpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
