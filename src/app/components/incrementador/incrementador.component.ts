import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('name') legend: string = 'Leyenda';
  @Input() progress: number = 50;

  // tslint:disable-next-line: no-output-rename
  @Output('updateValue') valueChangeEvent: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Progreso', this.progress);
    console.log('Legend', this.legend);
  }

  ngOnInit() {
    console.log('Legend', this.legend);
  }
  onChanges(newValue: number) {

    // let elementHTML: any = document.getElementsByName('progress')[0];

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    //elementHTML.value = Number(this.progress);
    this.txtProgress.nativeElement.value = this.progress;

    this.valueChangeEvent.emit(this.progress);
  }

  changeValue( value ) {

    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    this.valueChangeEvent.emit(this.progress);

    this.txtProgress.nativeElement.focus();

  }

}
