import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { IonButton, IonSpinner } from '@ionic/angular/standalone';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UsersListResponse } from 'src/app/types/users-list-response.type';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-users',
  imports:[CommonModule, IonButton, IonSpinner, ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users$: Observable<UsersListResponse> = of([]);
  readonly dialog = inject(MatDialog);
  private readonly _mockApiService = inject(MockApiService);

  ngOnInit() {
    this.users$ = this._mockApiService.getUsers();
  }

  showUserInfoDetails(user: IUser) {
    this.dialog.open(ModalComponent, {
      data: { 
        selectedUser: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          address: user.address,
          company: user.company,
          website: user.website,
        }
      },
    });


    console.log(user);
  }

}
