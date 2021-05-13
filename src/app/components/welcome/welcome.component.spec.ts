import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  @Component({
    selector: 'test-parent-component',
    template: `<app-welcome-component
      [classSection]="101"
    ></app-welcome-component>`,
  })
  class TestParentComponent {}

  let parentComponent: TestParentComponent;
  let component: WelcomeComponent;
  let testParentFixture: ComponentFixture<TestParentComponent>;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent, TestParentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    testParentFixture = TestBed.createComponent(TestParentComponent);
    fixture = TestBed.createComponent(WelcomeComponent);
    parentComponent = testParentFixture.componentInstance;
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.classSection = 101;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('welcome statement', () => {
    it('classSection value should be 101 on page load', () => {
      // Arrange
      // No arrange necessary here: we are testing the default value when the component loads
      // Act
      // fixture.detectChanges();
      // Assert
      expect(component.classSection).toBe(101);
    });
    it('classSection value should increment when Next button is clicked', () => {
      // Arrange
      const nextButton = document.getElementById('next-btn');
      // Act
      nextButton?.click();
      fixture.detectChanges();
      // Assert
      expect(component.classSection).toBe(102);
    });
    it('classSection value should reset to 101 when Reset button is clicked', () => {
      // Arrange
      const nextButton = document.getElementById('next-btn');
      const resetButton = document.getElementById('reset-btn');
      // Act
      nextButton?.click();
      console.log(component.classSection); // expected output: 102
      nextButton?.click();
      console.log(component.classSection); // expected output: 103
      resetButton?.click();
      fixture.detectChanges();
      // Assert
      expect(component.classSection).toBe(101);
    });
    it('color button should be teal after button is clicked one time', () => {
      // Arrange
      const colorButton = document.getElementById('color-btn');
      // Act
      colorButton?.click();
      fixture.detectChanges();
      // Assert
      colorButton?.classList.forEach((className: string) => {
        console.log('className: ', className);
      });
      expect(colorButton?.classList).toContain('btn-info');
    });
    it('color button should be teal after button is clicked one time', () => {
      // Arrange
      const colorButton = document.getElementById('color-btn');
      // Act
      colorButton?.click();
      colorButton?.click();
      // Assert
      colorButton?.classList.forEach((className: string) => {
        console.log('className: ', className);
      });
      expect(colorButton?.classList).toContain('btn-success');
    });
  });
});
