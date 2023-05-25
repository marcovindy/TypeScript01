import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent {
  @Input() time: number = 0; // Vstupní čas pro tracker
  @Output() timeUpdated = new EventEmitter<number>(); // Událost pro aktualizaci času

  interval: any; // Proměnná pro uchování intervalu

  startTimer() {
    this.interval = setInterval(() => {
      this.time += 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.timeUpdated.emit(this.time); // Odeslat aktualizovaný čas do nadřazené komponenty
  }

  formatTime() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

  getAnimationDuration() {
    return `${this.time}s`;
  }
}
