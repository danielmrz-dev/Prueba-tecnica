import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonSpinner, IonButton } from '@ionic/angular/standalone';
import { Observable, of } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { CommentsListResponse } from 'src/app/types/comments-list-response.type';

@Component({
  selector: 'app-comments',
  imports: [IonSpinner, IonButton, AsyncPipe],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  commentsList$: Observable<CommentsListResponse> = of()
  private readonly _mockApiService = inject(MockApiService);

  ngOnInit() {
    this.commentsList$ = this._mockApiService.getComments();
  }

}
