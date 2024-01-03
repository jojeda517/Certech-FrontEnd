import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {
  certificados: any[] = []; // Inicializa el arreglo de certificados vacío al principio

  constructor() {
    // Aquí es donde deberías obtener los certificados, ya sea de una API, de un servicio, o de algún otro lugar
    this.obtenerCertificados();
  }

  obtenerCertificados() {
    // Lógica para obtener los certificados de algún lugar y asignarlos a this.certificados
    // Por ejemplo:
    this.certificados = [
      { id: 1, titulo: 'Certificado 1', fecha: '01/01/2023', descripcion: 'Descripción del certificado 1', imagen: '../../assets/images/certificados.png' },
      { id: 2, titulo: 'Certificado 2', fecha: '02/01/2023', descripcion: 'Descripción del certificado 2', imagen: '../../assets/images/certificados.png' },
      // Más certificados...
    ];
    console.log(this.certificados);
  }

  redirigirDetalle(certificadoId: number) {
    // Implementa la lógica para redirigir al detalle del certificado
    console.log('Redirigir al detalle del certificado', certificadoId);
  }

  editarCertificado(certificado: any) {
    // Implementa la lógica para editar el certificado
    console.log('Editar certificado:', certificado);
  }

  eliminarCertificado(certificado: any) {
    // Implementa la lógica para eliminar el certificado
    console.log('Eliminar certificado:', certificado);
  }

  agregarCertificado() {
    // Implementa la lógica para agregar un nuevo certificado
    console.log('Agregar un nuevo certificado');
  }
}


