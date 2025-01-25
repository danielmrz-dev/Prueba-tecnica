import { Component, inject, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  imports: [IonModal],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  isOpen: boolean = true
  private readonly _modalService = inject(ModalService)

  ngOnInit() {
    
  }

}
