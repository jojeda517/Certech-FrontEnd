import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-notificacio',
  templateUrl: './notificacio.component.html',
  styleUrls: ['./notificacio.component.css']
})
export class NotificacioComponent implements OnInit, OnDestroy {
  message: string | undefined;
  private subscription: Subscription | undefined;

  constructor(private notificationService: MessageService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notification$.subscribe(
      (message) => {
        this.message = message;
        setTimeout(() => {
          this.message = undefined;
        }, 3000); // Ocultar después de 3 segundos
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
