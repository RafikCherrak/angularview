import { Component, OnInit } from '@angular/core';
import { AppareilComponent } from "./appareil/appareil.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppareilServices } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,  // Add standalone flag
  imports: [CommonModule, AppareilComponent] // Add CommonModule here
})
export class AppComponent implements OnInit {
  title = 'app';
  isAuth = false;
  lastUpdate = new Date();

  appareils:any[] | undefined;

  constructor(private appareilService : AppareilServices) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log('on allume tout !');
    this.appareilService.switchOnAll();
  }
  onEteint(){
    console.log('on eteint tout !');
    this.appareilService.switchOffAll();
  }
}
