import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import test from 'node:test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Dhruv';
  mobile = 8469511356;
  age = 24;
  inputvalue = 'test';

  onchange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputvalue = value;
  }

  user = [
    { name: 'aarav', age: 18, course: 'B.tech' },
    { name: 'dhruv', age: 24, course: 'M.sc' },
    { name: 'ronak', age: 19, course: 'MBBS' },
  ];
}
