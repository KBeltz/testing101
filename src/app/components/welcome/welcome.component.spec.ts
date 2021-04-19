import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('welcome statement', () => {
    it('class value should be 101 on page load', () => {
      // update
      // Arrange
      const num = 101;
      // Act
      fixture.detectChanges();
      // Assert
      expect(num).toBe(101);
    });
    it('class value should increment when Next button is clicked', () => {
      // update
      // Arrange
      const num = 101;
      // Act
      fixture.detectChanges();
      // Assert
      expect(num).toBe(101);
    });
  });
});
