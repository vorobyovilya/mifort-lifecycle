import {
  Component, EventEmitter, Input, OnInit, Output,
  SimpleChanges, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() nameSkills;
  @Input() skill;
  @Input() skillValue;
  @Output() changeSkillValue: EventEmitter<any> = new EventEmitter<any>();


  private color: string = 'blue';
  constructor() {
  }

  sendSkillValueChange(btnID) {
    btnID ? this.skillValue++ : this.skillValue--;
    btnID ? this.changeSkillValue.emit(1) : this.changeSkillValue.emit(-1);
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
