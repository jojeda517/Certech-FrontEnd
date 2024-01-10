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
      telefono: string = "";
      nombre: string = "";
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
          const idParticipante = params['id_participante'];
    
          if (idParticipante) {
            this.userService.getParticipantes(idParticipante).subscribe(
              (data: any) => {
                if (data && data.participante) {
                  this.id_participante = data.participante.id_participante;
                  this.cedula = data.participante.cedula;
                  this.nombre = data.participante.nombre_apellido;
                  this.telefono = data.participante.celular;
                  this.correo = data.participante.correo;
    
                  console.log('Participante obtenido:', data.participante);
                } else {
                  console.error('La respuesta del servicio no tiene la estructura esperada.');
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
        if (this.nombre && this.telefono && this.cedula && this.correo) {
          const actualizarData = {
            cedula: this.cedula,
            nombre: this.nombre,
            telefono: this.telefono,
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
            this.userService.crearParticipante(this.cedula, this.nombre, this.telefono, this.correo)
              .subscribe(
                (response) => {
                  console.log('Participante creado:', response);
                  this.router.navigate(['/eventos/usuarios']);
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
    }