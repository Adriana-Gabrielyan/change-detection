import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {

  @Input() subscription!: any;
  number!:number;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription.subscribe((val: number) => {
      this.number = val;
      this.changeDetector.markForCheck();
    });
  }

}
