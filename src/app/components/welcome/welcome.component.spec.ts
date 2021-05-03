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
      // Arrange
      // No arrange necessary here: we are testing the default value when the component loads
      // Act
      fixture.detectChanges();
      // Assert
      expect(component.num).toBe(101);
    });
    it('class value should increment when Next button is clicked', () => {
      // Arrange
      const nextButton = document.getElementById('next-btn');
      // Act
      nextButton?.click();
      fixture.detectChanges();
      // Assert
      expect(component.num).toBe(102);
    });
    it('class value should reset to 101 when Reset button is clicked', () => {
      // Arrange
      const nextButton = document.getElementById('next-btn');
      const resetButton = document.getElementById('reset-btn');
      // Act
      nextButton?.click();
      console.log(component.num); // expected output: 102
      nextButton?.click();
      console.log(component.num); // expected output: 103
      resetButton?.click();
      fixture.detectChanges();
      // Assert
      expect(component.num).toBe(101);
    });
  });
});
