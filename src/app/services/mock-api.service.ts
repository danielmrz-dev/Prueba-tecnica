import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersListResponse } from "../types/users-list-response.type";
import { BookingListResponse } from "../types/booking-list-response.type";
import { TutorsListResponse } from "../types/tutors-list-response.type";

@Injectable({
    providedIn: 'root'
})
export class MockApiService {

    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://api.mockapi.com/api/users',
            { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }

    getReservations(): Observable<BookingListResponse> {
        return this._http.get<BookingListResponse>('https://api.mockapi.com/api/users/booking',
            { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }

    getTutors(): Observable<TutorsListResponse> {
        return this._http.get<TutorsListResponse>('https://api.mockapi.com/api/tutors',
            { headers: { 'x-api-key': 'fa8bd36ecb1d4e43bc0952504a138576' } }
        );
    }
}