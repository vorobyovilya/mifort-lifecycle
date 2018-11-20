import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() nameHeader;
  @Output() nameEntered: EventEmitter<string> = new EventEmitter<string>();

  private color: string = 'green';

  constructor() {
  }

  changeName(result: string): void {
    this.nameEntered.emit(result);
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
