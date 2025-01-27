import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UsersListResponse } from "../types/users-list-response.type";
import { CommentsListResponse } from "../types/comments-list-response.type";
import { PostsListResponse } from "../types/posts-list-response.interface";

@Injectable({
    providedIn: 'root'
})
export class MockApiService {

    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users').pipe(
            catchError(() => {
                return throwError(() => new Error('An error occurred while loading the users list. Please try again later.'))
            })
        )
    }

    getComments(): Observable<CommentsListResponse> {
        return this._http.get<CommentsListResponse>('https://jsonplaceholder.typicode.com/comments').pipe(
            catchError(() => {
                return throwError(() => new Error('An error occurred while loading the comments list. Please try again later.'))
            })
        )
    }

    getPosts(): Observable<PostsListResponse> {
        return this._http.get<PostsListResponse>('https://jsonplaceholder.typicode.com/posts').pipe(
            catchError(() => {
                return throwError(() => new Error('An error occurred while loading the posts list. Please try again later.'))
            })
        )
    }
}