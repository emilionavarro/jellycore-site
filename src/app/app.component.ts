import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableAdjectives: string[];
  adjective: string;

  constructor() {
    this.setDefaults();
    this.chooseAdjective();
  }

  setDefaults() {
    this.availableAdjectives = [
      "different"
      , "original"
      , "attractive"
      , "alluring"
      , "striking"
      , "beautiful"
      , "compelling"
      , "impressive"
      , "refreshing"
      , "captivating"
      , "provocative"
      , "delightful"
      , "engaging"
    ];
  }

  chooseAdjective() {
    var max = 0;

    max = this.availableAdjectives.length;

    if (max > 0)
      this.adjective = this.availableAdjectives[getRandomInRange(0, max - 1)]; //include min, exclude max
    else
      this.adjective = DEFAULT_ADJECTIVE;
  }
}

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const DEFAULT_ADJECTIVE: string = "cool";