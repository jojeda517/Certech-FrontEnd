import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { read, utils } from 'xlsx';
import { NavbarComponent } from "../../componentes/navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-tabla',
    standalone: true,
    templateUrl: './tabla.component.html',
    styleUrl: './tabla.component.css',
    imports: [CommonModule, NavbarComponent]
})
export class TablaComponent {
    constructor(private router: Router) { }

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
        // Aquí puedes realizar la lógica para guardar los datos en una lista o hacer cualquier otra acción que necesites.
        console.log('Datos importados:', this.users);
        // Por ejemplo, puedes guardar los datos en una lista para utilizarla después.
        // this.listaImportada = this.users;
    }

}