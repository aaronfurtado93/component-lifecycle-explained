import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';
import {IChild} from '../interfaces/ichild';

@Component({
  selector: 'app-example-parent',
  templateUrl: './example-parent.component.html',
  styleUrls: ['./example-parent.component.scss']
})
export class ExampleParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  children: IChild[] = [
    {
      name: `First`,
      sequence: 0
    }
  ];
  childName = ``;

  @ViewChild(`totalChildren`) totalChildren: ElementRef;
  @ViewChild(`deleteAllChildrenButton`) deleteAllChildrenButton: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.group(`ngOnChanges fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngOnInit(): void {
    console.group(`ngOnInit fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngDoCheck(): void {
    console.group(`ngDoCheck fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngAfterContentInit(): void {
    console.group(`ngAfterContentInit fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngAfterContentChecked(): void {
    console.group(`ngAfterContentChecked fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngAfterViewInit(): void {
    console.group(`ngAfterViewInit fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngAfterViewChecked(): void {
    console.group(`ngAfterViewChecked fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  ngOnDestroy(): void {
    console.group(`ngOnDestroy fired inside Parent`);
    console.log(`ViewChild: deleteAllChildrenButton`, this.deleteAllChildrenButton);
    console.log(`ViewChild: totalChildren`, this.totalChildren);
    console.groupEnd();
  }

  createChild(): void {
    this.children.push({
      name: this.childName,
      sequence: (this.children.length)
    });
    this.totalChildren.nativeElement.innerText = `${this.children.length}`;
    this.childName = ``;
  }

  deleteChild(sequence: number): void {
    this.children = this.children
      .filter(child => child.sequence !== sequence)
      .map((child, index) => {
        child.sequence = index;
        return child;
      });
    this.totalChildren.nativeElement.innerText = `${this.children.length}`;
  }
}
