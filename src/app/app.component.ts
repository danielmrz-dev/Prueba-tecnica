import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';
import { IonHeader } from '@ionic/angular/standalone';
import { UsersComponent } from "./components/users/users.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, UsersComponent, IonButton, IonContent, IonHeader],
})
export class AppComponent {
  constructor() {}
}
