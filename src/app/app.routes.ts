import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { 
        path: 'users', 
        loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent)
    },
    { 
        path: 'posts', 
        loadComponent: () => import('./components/posts/posts.component').then(m => m.PostsComponent)
    },
    { 
        path: 'comments', 
        loadComponent: () => import('./components/comments/comments.component').then(m => m.CommentsComponent)
    },
];
