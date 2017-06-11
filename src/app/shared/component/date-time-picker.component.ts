/**
 * desc：date-time-picker
 * how to use: <date-time-picker [(ngModel)]='your_prop' accuracy='hour' ></date-time-picker>
 */

import {Component, Input, AfterViewInit, ElementRef, EventEmitter, Output} from '@angular/core';
import {CustomInputComponent, customInputAccessor} from '../class/custom-input.class';

@Component({
  selector: 'date-time-picker',
  template: `<input type="text" class="form-control" [disabled]="disabled" [(ngModel)]="value" (blur)="onBlur()" />`,
  providers: [customInputAccessor(DateTimePickerComponent)]
})
// ControlValueAccessor: A bridge between a control and a native element.
export class DateTimePickerComponent extends CustomInputComponent implements AfterViewInit {
  @Input() accuracy: string;  // accuracy of date-time pick. [min(default) | hour | day]
  @Input() startDate: string; // date range: start date
  @Input() endDate: string; // date range: end date
  @Input() maxView: string; // max view
  @Input() disabled: boolean = false; // isDisabled

  @Output() change = new EventEmitter<any>(); // change event callback of input

  private el; // element

  constructor(el: ElementRef) {
    super();
    this.el = el;
  }

  // Lifecycle hook that is called after a component's view has been fully initialized.
  ngAfterViewInit() {
    /*
     source:http://www.bootcss.com/p/bootstrap-datetimepicker/
     minView: default 2
     maxView: default 4
     0 or 'hour' for the hour view （hour view）
     1 or 'day' for the day view 0-24h （day view）
     2 or 'month' for month view (the default) （month view）
     3 or 'year' for the 12-month overview （year view）
     4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers. （decade view）
     */
    let format = 'yyyy-mm-dd hh:ii:00'; // default accuracy: minute. datetimepicker do not support second accuracy.
    let minView = 0; // default min view: hour view

    if (this.accuracy === 'hour') {
      format = 'yyyy-mm-dd hh:00:00'; // hour accuracy: both minute and second is 00
      minView = 1; // min view: day view
    } else if (this.accuracy === 'day') {
      format = 'yyyy-mm-dd'; // day accuracy
      minView = 2; // min view: month view
    }

    $(this.el.nativeElement).find('input').datetimepicker({
      language: 'zh-CN',
      autoclose: true, // autoclose after date-time picked
      maxView: parseInt(this.maxView, 10) || 4, // max view (default: decade view)
      startDate: this.startDate || '', // date range: start date.
      endDate: this.endDate || '', // date range: end date.
      format, // output format
      minView, // min view (default: hour view)
    })
      .on('hide', ev => {
        this.value = $(ev.target).val(); // set value. (calling onChange())
        this.change.emit({value: $(ev.target).val()}); // change event callback of input
      });
  }
}
