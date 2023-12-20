import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  public usersChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getUsers(): any[] {
    return this.users;
  }

  setUsers(users: any[]): void {
    this.users = users;
    this.usersChanged.next([...this.users]);
  }

  addUsers(newUsers: any[]): void {
    this.users = [...this.users, ...newUsers];
    this.usersChanged.next([...this.users]);
  }
}