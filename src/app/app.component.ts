import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonContent, HeaderComponent, RouterOutlet],
})
export class AppComponent {}
