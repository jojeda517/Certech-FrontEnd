import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private notificationSubject = new Subject<string>();

  public notification$ = this.notificationSubject.asObservable();

  showNotification(message: string): void {
    this.notificationSubject.next(message);
  }
}