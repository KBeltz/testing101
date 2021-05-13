import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() classSection: number = 0;
  constructor() {}

  ngOnInit(): void {}

  nextSection(): void {
    this.classSection++;
  }

  reset(): void {
    this.classSection = 101;
  }

  toggleColor(): void {
    document.getElementById('color-btn')?.classList.contains('btn-success')
      ? document
          .getElementById('color-btn')
          ?.classList.replace('btn-success', 'btn-info')
      : document
          .getElementById('color-btn')
          ?.classList.replace('btn-info', 'btn-success');
  }
}
