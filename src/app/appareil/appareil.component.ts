import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilServices } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AppareilComponent {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;
 constructor(private appareilService : AppareilServices) {}
  getStatus() {
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus === 'éteint'){
      return 'red'
      }
      else{
        return 'green'
        }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
