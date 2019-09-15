import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input, OnChanges,
  Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ch-button-chooser',
  templateUrl: './button-chooser.component.html',
  styleUrls: ['./button-chooser.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonChooserComponent),
      multi: true,
    }]
})
export class ButtonChooserComponent implements ControlValueAccessor, OnChanges  {

  constructor() {
  }

  @Input() choices: string[] = [];
  @Input() choicesString: string;
  @Input() value: any;

  @Output() valueChanged = new EventEmitter<any>();

  private propagateChange = Function.prototype;
  private propagateTouched = Function.prototype;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.choicesString) {
      this.choices = changes.choicesString.currentValue.split(',');
    }
  }

  public writeValue(value: any) {
      this.value = value;
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  changeValue(value: string) {
    this.value = value;
    this.propagateChange(this.value);
    this.propagateTouched();
    this.valueChanged.emit(this.value);
    return false;
  }
}
