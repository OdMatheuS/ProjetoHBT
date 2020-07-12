import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent {
  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  selectedRadioButtonValue: string = 'All';


  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}