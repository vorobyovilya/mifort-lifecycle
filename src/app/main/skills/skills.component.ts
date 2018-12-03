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
  @Input() skillColor;
  @Output()  changeSkillValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  sendSkillValueChange(btnID) {
    btnID ? this.skillValue++ : this.skillValue--;
    btnID ? this.changeSkillValue.emit(1) : this.changeSkillValue.emit(-1);
  }

  ngAfterContentChecked(): void {
    console.log(`%cAfterContentChecked`, `color: ${this.skillColor}`);
  }

  ngAfterContentInit(): void {
    console.log(`%cAfterContentInit`, `color: ${this.skillColor}`);
  }

  ngAfterViewChecked(): void {
    console.log(`%cAfterViewChecked`, `color: ${this.skillColor}`);

  }

  ngAfterViewInit(): void {
    console.log(`%cAfterViewInit`, `color: ${this.skillColor}`);

  }

  ngDoCheck(): void {
    console.log(`%cDoCheck`, `color: ${this.skillColor}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%cOnChanges`, `color: ${this.skillColor}`);

  }

  ngOnDestroy(): void {
    console.log(`%cOnDestroy`, `color: ${this.skillColor}`);
  }

  ngOnInit(): void {
    console.log(`%cOnInit`, `color: ${this.skillColor}`);
  }

}
