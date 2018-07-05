import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableAdjectives: string[];
  adjectiveIndex: number;

  constructor() {
    this.setDefaults();
    this.loopAdjectives();
  }

  setDefaults() {
    this.adjectiveIndex = 0;
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
      , "gripping"
      , "exciting"
      , "fascinating"
      , "intriguing"
      , "lively"
      , "cool"
      , "modern"
      , "stimulating"
      , "mind-blowing"
      , "electrifying"
    ];
  }

  changeAdjective() {
    var max = 0;

    max = this.availableAdjectives.length;
    this.adjectiveIndex = getRandomInRange(0, max - 1, this.adjectiveIndex); //include min, exclude max
  }

  loopAdjectives() {
    setInterval(() => {
      this.changeAdjective();
    }, 1000);
  }
}

const getRandomInRange = (min:number, max:number, exclude?) => {
  var result = Math.floor(Math.random() * (max - min) + min);

  return (result === exclude) ? getRandomInRange(min, max, exclude) : result;
}