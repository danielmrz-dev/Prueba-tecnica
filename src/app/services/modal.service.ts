import { Injectable } from "@angular/core";
import { ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from "../components/modal/modal.component";

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    
    constructor(private _modalController: ModalController) {}

    async openModal(): Promise<any> {
        const modal = this._modalController.create({
            component: ModalComponent,
        });
        (await modal).present();

        return (await modal).onWillDismiss;
    }

    async closeModal(data?: any): Promise<void> {
        await this._modalController.dismiss(data);
    }
}