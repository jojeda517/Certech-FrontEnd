import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CertificadosService } from 'src/app/servicios/certificados.service';
import { EventoService } from 'src/app/servicios/evento.service';
import { FirmaService } from 'src/app/servicios/firma.service';
import { MessageService } from 'src/app/servicios/message.service';
import { PlantillaService } from 'src/app/servicios/plantilla.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-form-certificado',
  templateUrl: './form-certificado.component.html',
  styleUrls: ['./form-certificado.component.css']
})
export class FormCertificadoComponent implements OnInit {
  
  usuarios:any[]=[];
  usuariosnube:any[]=[]
  participantes: any[] = [];
  participantesLocal: any[] = [];
  todosParticipantes:any[]=[]
  private subscription: Subscription = new Subscription;
  idEvento:string="";

  eventoSeleccionado: any; // Puedes ajustar el tipo según la estructura de tus datos
  firmas: any[] = [];
  eventos: any[] = [];
  plantillas: any[] = [];
  participantesSeleccionados: string[] = [];
  firma1: any;
  firma2: any;
  plantilla: any;

  constructor(
    private notificationService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private firmaService: FirmaService,
    private eventoService: EventoService,
    private plantillaService: PlantillaService,
    private certificadoService: CertificadosService,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.idEvento = params['id'];
    this.traerfirmas();
    this.traerEventos();
    this.traerPlantillas();
    this.subscription = this.userService.obtenerUsuarios().subscribe(
      (data: any) => {
        // Actualizar la variable participantes con los datos obtenidos
        this.participantes = data;
        this.participantesLocal = [...this.participantes];
        console.log(this.idEvento)
      },
      error => {
        console.error('Error al obtener participantes:', error);
      }
    );
    this.obtenerParticipantes()
  });
 

  }

     
 
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion() {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas() {
    this.router.navigate(['/firmas']);
  }

  guardarEvento(): void {
    this.router.navigate(['/eventos/usuarios/certificado']);
  }

  cancelar(): void {
    this.router.navigate(['/eventos/usuarios']);
  }
  obtenerParticipantes() {
    this.userService.obtenerparticipante().subscribe(
      (data: any) => {
        // Verificar que data.participantes sea un array
        if (Array.isArray(data.participantes) && data.participantes.length > 0) {
          // Almacenar los datos en el array usuariosnube
          this.usuariosnube = data.participantes;
  
        
  
          // Resto del código si es necesario
  
        } else {
          console.error('El servicio no devolvió un array de participantes válido:', data);
        }
      },
      error => {
        console.error('Error al obtener participantes:', error);
      }
    );
  }
  
  
  traerfirmas() {
    this.firmaService.obtenerFirmas().subscribe(
      (data: any[]) => {
        this.firmas = Object.values(data);
      },
      (error) => {
        console.error('Error al obtener firmas:', error);
      }
    );
  }

  traerEventos() {
    this.eventoService.getEventos().subscribe(
      (data: any[]) => {
        this.eventos = Object.values(data);
        console.log('Eventos obtenidos:', this.eventos);
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
      }
    );
  }

  traerPlantillas() {
    this.plantillaService.obtenerPlantillas().subscribe(
      (data: any[]) => {
        this.plantillas = Object.values(data);
      },
      (error) => {
        console.error('Error al obtener plantillas:', error);
      }
    );
  }

  seleccionarEvento() {
    console.log('ID del evento seleccionado:', this.eventoSeleccionado);
  }

  seleccionarFirma1() {
    console.log('ID de la primera firma seleccionada:', this.firma1);
  }

  seleccionarFirma2() {
    console.log('ID de la segunda firma seleccionada:', this.firma2);
  }

  seleccionarPlantilla() {
    console.log('ID de la plantilla seleccionada:', this.plantilla);
  }
  seleccionarPlantillavista() {
    console.log('ID de la plantilla seleccionada:', this.plantilla);
  }
  obtenerIds() {
    
    console.log("Estudiantes Nube:", this.idEvento);
    console.log("Participantes Local:", this.participantesLocal);
  
    this.participantesLocal.forEach(participanteLocal => {
      const cedulaBuscada = participanteLocal.cedula;
      const elementoConId = this.usuariosnube.find(item => item.cedula === cedulaBuscada);
  
      if (elementoConId) {
        this.participantesSeleccionados.push(elementoConId.id_participante)
        console.log(`Cédula: ${cedulaBuscada}, Id correspondiente: ${elementoConId.id_participante}`);
        // Aquí puedes hacer lo que necesites con el id encontrado
      } else {
        console.log(`No se encontró la cédula ${cedulaBuscada} en listaConId`);
      }
    });
  }
  
  
  
  correr(){
    this.obtenerIds()
  }
      
    generarCertificado() {
      this.correr();
      console.log(this.participantesSeleccionados);
    
      if (this.firma1 && this.firma2 && this.participantesSeleccionados.length > 0) {
        // Iterar sobre cada ID de participante y realizar la solicitud a la URL del certificado con datos en el cuerpo
        this.participantesSeleccionados.forEach((idParticipante) => {
          const datosSolicitud = {
            id_administrador: 3,
            id_evento: parseInt(this.eventoSeleccionado, 10),
            id_participante: parseInt(idParticipante,10), // Corregir aquí
            id_plantilla: parseInt(this.plantilla,10)
          };
    
          const urlCompleta = `http://127.0.0.1:8000/api/certificado/${parseInt(this.firma1)}/${parseInt(this.firma2)}/`;
          console.log(datosSolicitud);
    
          // Realizar la solicitud a la URL del certificado con datos en el cuerpo
          this.certificadoService.generarCertificado(urlCompleta, datosSolicitud).subscribe(
            (response) => {
              this.router.navigate(['eventos/usuarios']);
              
              const confirmacion = new window.Text('Agregado con exito');
              console.log(`Certificado generado para el participante ${idParticipante}:`, response);
              

              // Puedes manejar la respuesta aquí, por ejemplo, mostrar un mensaje en la interfaz de usuario
            },
            (error) => {
             
              
              console.error(`Error al generar certificado para el participante ${idParticipante}:`, error);
              // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje de error en la interfaz de usuario
            }
          );
        });
      } else {
        console.error('Por favor, complete las firmas y seleccione al menos un participante.');
      }
    }
    
    mostrarNotificacion(): void {
      this.notificationService.showNotification('Certificado creado con éxito');
    }
}