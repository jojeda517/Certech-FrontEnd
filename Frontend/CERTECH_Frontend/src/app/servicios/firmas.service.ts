import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmasService {
  public firmasChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  firmas: any[] = [
    { cedula: '1926483597', nombre: 'Juan Pérez', correo: 'juanperez.com', firma: '../../../assets/images/1x/firma.png' },
    { cedula: '1926483598', nombre: 'Pedro González', correo: 'pedrogonzalez.com', firma: '../../../assets/images/1x/firma.png' },
    { cedula: '1926483599', nombre: 'María López', correo: 'marialopez.com', firma: '../../../assets/images/1x/firma.png' },
    { cedula: '1850089952', nombre: 'María López', correo: 'marialopez.com', firma: '../../../assets/images/1x/firma.png' },
    // Agrega más firmas según sea necesario
  ];
  getfirmas(): any[] {
    return this.firmas;
  }
  setFirmas(firmas: any[]): void {
    this.firmas = firmas;
    this.firmasChanged.next([...this.firmas]);
  }
}
