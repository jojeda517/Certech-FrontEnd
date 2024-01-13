    import { Location } from '@angular/common';
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute, Router } from '@angular/router';
    import { UserService } from 'src/app/servicios/user.service';

    @Component({
      selector: 'app-form-estudiante',
      templateUrl: './form-estudiante.component.html',
      styleUrls: ['./form-estudiante.component.css']
    })
    export class FormEstudianteComponent  implements OnInit {
      id_participante: string | undefined = "";
      celular: string = "";
      nombre_apellido: string = "";
      cedula: string = "";
      correo: string = "";
    
      constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private location: Location
      ) {}
    
      ngOnInit(): void {
        this.route.params.subscribe(params => {
          const id_participante = params['id_participante'];
      
          if (id_participante) {
            this.userService.getParticipantes(id_participante).subscribe(
              (response: any) => {
                console.log('Respuesta completa del servicio:', response);
      
                if (response && response.participantes) {
                  const participantesArray = response.participantes;
      
                  if (participantesArray.length > 0) {
                    const participante = participantesArray[0]; // Tomar el primer elemento del array
                    this.id_participante = participante.id_participante;
                    this.cedula = participante.cedula;
                    this.nombre_apellido = participante.nombre_apellido;
                    this.celular = participante.celular;
                    this.correo = participante.correo;
      
                    console.log('Participante obtenido:', participante);
      
                    // Aquí puedes realizar cualquier lógica adicional que dependa de la información obtenida
                    // ya que estás dentro del bloque subscribe y tienes acceso a los datos.
                  } else {
                    console.error('El array de participantes está vacío.');
                  }
                } else {
                  console.error('La propiedad participantes no existe en la respuesta del servicio.');
                }
              },
              (error) => {
                console.error('Error al obtener participante por ID:', error);
              }
            );
          }
        });
      }
      
      
      mostrarEventos(): void {
        this.router.navigate(['/dashboard']);
      }
    
      mostrarValidacion(): void {
        this.router.navigate(['/validacion']);
      }
    
      mostrarFirmas(): void {
        this.router.navigate(['/firmas']);
      }
    
    
      guardar(): void {
        if (this.nombre_apellido && this.celular && this.cedula && this.correo) {
          const actualizarData = {
            cedula: this.cedula,
            nombre_apellido: this.nombre_apellido,
            celular: this.celular,
            correo: this.correo
          };
    
          if (this.id_participante) {
            this.userService.actualizarParticipante(this.id_participante, actualizarData)
              .subscribe(
                (response) => {
                  console.log('Participante actualizado:', response);
                },
                (error) => {
                  console.error('Error al actualizar participante:', error);
                }
              );
          } else {
            const nuevoParticipante = {
              cedula: this.cedula,
              nombre_apellido: this.nombre_apellido,
              celular: this.celular,
              correo: this.correo 
            };
        
            this.userService.agregarParticipante(nuevoParticipante);
            this.userService.crearParticipante(this.cedula, this.nombre_apellido, this.celular, this.correo)
              .subscribe(
                (response) => {
                  this.route.queryParams.subscribe(params => {
                    const id= params['id'];
                    console.log(id)
                    // Asegúrate de que estás usando el nombre correcto del parámetro en queryParams
                    this.router.navigate(['/eventos/usuarios'], { queryParams: { id: id} });
                  });
          
                
                },
                (error) => {
                  console.error('Error al crear el participante:', error);
                }
              );
          }
        } else {
          console.error('Por favor, complete todos los campos antes de guardar.');
        }
      }
    
      cancelar(): void {
        this.location.back();
      }
     /* actualizarParticipante(participanteActualizado: any): void {
        this.userService.actualizarUsuario(participanteActualizado);
      }*/
    }