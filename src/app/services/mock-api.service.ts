import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersListResponse } from "../types/users-list-response.type";
import { CommentsListResponse } from "../types/comments-list-response.type";
import { PostsListResponse } from "../types/posts-list-response.interface";
import { IUser } from "../interfaces/user/user.interface";

@Injectable({
    providedIn: 'root'
})
export class MockApiService {

    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users'
        // , { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }

    getUserById(userId: number): Observable<IUser> {
        return this._http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + userId
        // , { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }

    getComments(): Observable<CommentsListResponse> {
        return this._http.get<CommentsListResponse>('https://jsonplaceholder.typicode.com/comments'
        // , { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }

    getPosts(): Observable<PostsListResponse> {
        return this._http.get<PostsListResponse>('https://jsonplaceholder.typicode.com/posts'
        // , { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }
}