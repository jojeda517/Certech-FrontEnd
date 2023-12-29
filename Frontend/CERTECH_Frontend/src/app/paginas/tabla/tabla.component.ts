import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { read, utils } from 'xlsx';
import { NavbarComponent } from "../../componentes/navbar/navbar.component";
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';

@Component({
    selector: 'app-tabla',
    standalone: true,
    templateUrl: './tabla.component.html',
    styleUrl: './tabla.component.css',
    imports: [CommonModule, NavbarComponent]
})
export class TablaComponent {
    constructor(private router: Router,private userService: UserService) { }

    mostrarEventos() {
        this.router.navigate(['/dashboard']);
    }
    mostrarValidacion() {
        this.router.navigate(['/validacion']);
    }
    mostrarFirmas() {
        this.router.navigate(['/firmas']);
    }
    users: any[] = [];
    csvImport($event: any) {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const row = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    this.users = row;
                    console.log('Usuarios cargados:', this.users);

                    console.log('Hola mundo', this.users);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    }
    importarDatos() {
        
        console.log('Datos importados:', this.users);
        this.userService.addUsers(this.users); // Agrega los usuarios al servicio
        this.router.navigate(['/eventos/usuarios']);
    
    }

}   