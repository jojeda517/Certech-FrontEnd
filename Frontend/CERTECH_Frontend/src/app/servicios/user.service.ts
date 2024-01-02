import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [
    {
        'Nombre': 'Adan',
        'Correo': 'adan@example.com',
        'Telefono': '8925654',
        'Direccion': 'Ambato'
    },
    {
        'Nombre': 'Eduardo',
        'Correo': 'eduardo@example.com',
        'Telefono': '254852',
        'Direccion': 'Quito'
    },
    {
        'Nombre': 'Jonathan',
        'Correo': 'jonathan@example.com',
        'Telefono': '55155885',
        'Direccion': 'Latacunga'
    }
];
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