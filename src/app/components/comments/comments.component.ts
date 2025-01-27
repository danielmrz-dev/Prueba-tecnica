import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IonSpinner, IonButton } from '@ionic/angular/standalone';
import { catchError, Observable, of, throwError } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { CommentsListResponse } from 'src/app/types/comments-list-response.type';
import { ModalComponent } from '../modal/modal.component';
import { IComment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  imports: [IonSpinner, IonButton, AsyncPipe],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  commentsList$: Observable<CommentsListResponse> = of();
  errorMessage: string | null = null;
  
  private readonly _mockApiService = inject(MockApiService);
  private readonly dialogRef = inject(MatDialog)

  ngOnInit() {
    this.commentsList$ = this._mockApiService.getComments().pipe(
      catchError((error) => {
        this.errorMessage = error.message;
        return of([]);
      })
    )
  }

  openComment(comment: IComment) {
    this.dialogRef.open(ModalComponent, {
      data: {
        body: comment.body,
        email: comment.email,
        title: comment.name,
      }
    })
  }

}
