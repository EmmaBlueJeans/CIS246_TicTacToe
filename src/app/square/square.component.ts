import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button nbButton *ngIf="!value">{{ value }}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }} </button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: [`./square.component.css`]
  
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
