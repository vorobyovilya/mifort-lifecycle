import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  public nameMain: string;

  public skills: string[] = ['Skill #1', 'Skill #2', 'Skill #3'];

  public skillsValues = [0, 0, 0];

  public total = 0;
  private color = 'red';

  constructor() {
  }


  changeName(result) {
    this.nameMain = result;
  }

  changeSkillValue(dif, index) {
    this.skillsValues[index] += dif;
    this.total = this.skillsValues.reduce(function (sum, current) {
      return sum + current;
    }, 0);
  }

  ngAfterContentChecked(): void {
    console.log(`%cAfterContentChecked`, `color: ${this.color}`);
  }

  ngAfterContentInit(): void {
    console.log(`%cAfterContentInit`, `color: ${this.color}`);
  }

  ngAfterViewChecked(): void {
    console.log(`%cAfterViewChecked`, `color: ${this.color}`);

  }

  ngAfterViewInit(): void {
    console.log(`%cAfterViewInit`, `color: ${this.color}`);

  }

  ngDoCheck(): void {
    console.log(`%cDoCheck`, `color: ${this.color}`);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%cOnChanges`, `color: ${this.color}`);

  }

  ngOnDestroy(): void {
    console.log(`%cOnDestroy`, `color: ${this.color}`);
  }

  ngOnInit(): void {
    console.log(`%cOnInit`, `color: ${this.color}`);
  }

}
