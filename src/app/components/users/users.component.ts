import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { IonButton, IonSpinner } from '@ionic/angular/standalone';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UsersListResponse } from 'src/app/types/users-list-response.type';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-users',
  imports:[CommonModule, IonButton, IonSpinner],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users$: Observable<UsersListResponse> = of([]);

  private readonly _mockApiService = inject(MockApiService);
  private readonly _modalService = inject(ModalService);

  ngOnInit() {
    this.users$ = this._mockApiService.getUsers();
  }

  showUserInfoDetails(user: IUser) {
    console.log(user);
    this.openModal()
  }

  async openModal() {
    await this._modalService.openModal();
  }

}
