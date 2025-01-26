import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { IonButton } from '@ionic/angular/standalone'

@Component({
  selector: 'app-modal',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, CommonModule, IonButton],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  readonly data = inject(MAT_DIALOG_DATA);
}
