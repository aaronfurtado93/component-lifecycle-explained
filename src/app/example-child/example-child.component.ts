import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {IChild} from '../interfaces/ichild';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.scss']
})
export class ExampleChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() data: IChild;
  @Output() deleteChildRequested: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges fired inside Child '${this.data?.name}'`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit fired inside Child '${this.data?.name}'`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck fired inside Child '${this.data?.name}'`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit fired inside Child '${this.data?.name}'`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked fired inside Child '${this.data?.name}'`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit fired inside Child '${this.data?.name}'`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked fired inside Child '${this.data?.name}'`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy fired inside Child '${this.data?.name}'`);
  }

  deleteChild(): void {
    this.deleteChildRequested.emit(this.data.sequence);
  }
}
