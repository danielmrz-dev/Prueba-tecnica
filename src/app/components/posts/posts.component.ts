import { Component, inject, OnInit } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { MockApiService } from 'src/app/services/mock-api.service';
import { CommonModule } from '@angular/common';
import { IPostsWithUsers } from 'src/app/interfaces/posts-with-users.interface';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postsWithUsers$: Observable<IPostsWithUsers[]> = of([]);

  private readonly _mockApiService = inject(MockApiService);

  ngOnInit(): void {
    const posts$ = this._mockApiService.getPosts();
    const users$ = this._mockApiService.getUsers();

    this.postsWithUsers$ = combineLatest([posts$, users$]).pipe(
      map(([posts, users]) =>
        posts.map((post) => ({
          ...post,
          username: users.find((user) => user.id === post.userId)?.username || 'Unknown',
          name: users.find((user) => user.id === post.userId)?.name || 'Unknown',
        })).sort(() => Math.random() - 0.5)
      )
    );
  }
}
