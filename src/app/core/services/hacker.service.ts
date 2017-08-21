import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hacker } from '../hacker.model';

@Injectable()
export class HackerService {

  constructor(private http: HttpClient) { }

  getHackers(searchTerm: string) {
    return this.http.get<Hacker[]>(`/api/hackers?q=${searchTerm}`);
  }

}
