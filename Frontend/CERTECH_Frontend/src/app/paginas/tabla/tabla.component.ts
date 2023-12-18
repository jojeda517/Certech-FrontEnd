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
}