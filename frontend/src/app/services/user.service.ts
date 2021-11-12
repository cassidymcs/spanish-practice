import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';
import { from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User;
  public users: any;  //previouse users: Users[];

  constructor(private http:HttpClient) { 
    this.selectedUser = new User()
  }
  public getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users')
  }
  public postUsers(user:User) {
    return this.http.post('http://localhost:3000/users', user)
  }
  public putUsers(user:User) {
    return this.http.put('http://localhost:3000/users/${user._id}', user)
  }
  public deleteUser(_id:string) {
    return this.http.get('http://localhost:3000/users/${_id}')
  }
}
