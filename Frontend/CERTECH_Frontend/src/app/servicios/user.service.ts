import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [
    {
      'Cedula': '185088995',
        'Nombre': 'Adan',
        'Correo': 'adan@example.com',
        'Telefono': '8925654'
        
    },
    {
      'Cedula': '185088934',
        'Nombre': 'Eduardo',
        'Correo': 'eduardo@example.com',
        'Telefono': '254852'
    },
    {
      'Cedula': '185056633',
        'Nombre': 'Jonathan',
        'Correo': 'jonathan@example.com',
        'Telefono': '55155885'
    }
];
  public usersChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private cedulaUsuarioSource = new BehaviorSubject<string>('');
  cedulaUsuario$ = this.cedulaUsuarioSource.asObservable();
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
  setCedulaUsuario(cedula: string) {
    this.cedulaUsuarioSource.next(cedula);
  }
}