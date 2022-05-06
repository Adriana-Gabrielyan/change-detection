import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {

  interval = interval(500);

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.interval.subscribe(val => {
    //   this.print = val;
    //   // this.changeDetector.markForCheck();
    // });
  }




}
