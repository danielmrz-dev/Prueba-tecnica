import { Component, inject, OnInit } from '@angular/core';
import { catchError, combineLatest, map, Observable, of, throwError } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { CommonModule } from '@angular/common';
import { IPostsWithUsers } from 'src/app/interfaces/posts-with-users.interface';
import { IonItem, IonList, IonSelect, IonSelectOption, IonSpinner } from '@ionic/angular/standalone';
import { UsersListResponse } from 'src/app/types/users-list-response.type';


@Component({
  selector: 'app-posts',
  imports: [CommonModule, IonItem, IonList, IonSelect, IonSelectOption, IonSpinner],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  usersList$: Observable<UsersListResponse> = of([]);
  postsWithUsers$: Observable<IPostsWithUsers[]> = of([]);
  filteredPostsByUser: IPostsWithUsers[] = [];
  postsToFilter: IPostsWithUsers[] = []
  errorMessage: string | null = null

  private readonly _mockApiService = inject(MockApiService);

  ngOnInit(): void {
    const posts$ = this._mockApiService.getPosts().pipe(
      catchError((error) => {
        this.errorMessage = error.message;
        return of([]);
      })
    )
    const users$ = this._mockApiService.getUsers();

    this.usersList$ = this._mockApiService.getUsers();

    this.postsWithUsers$ = combineLatest([posts$, users$]).pipe(
      map(([posts, users]) =>
        posts.map((post) => ({
          ...post,
          username: users.find((user) => user.id === post.userId)?.username || 'Unknown',
          name: users.find((user) => user.id === post.userId)?.name || 'Unknown',
        })).sort(() => Math.random() - 0.5)
      ),

    );

    this.postsWithUsers$.subscribe((posts) => {
      this.filteredPostsByUser = posts;
      this.postsToFilter = posts;
    })

  }

  showFilteredUsers(event: Event) {
      const target = event.target as HTMLIonSelectElement;
      const userId = target.value;
      if (userId === 'all') {
        this.filteredPostsByUser = this.postsToFilter;
        return;
      }
      this.filteredPostsByUser = this.postsToFilter.filter(post => post.userId === userId);
  }
}
