import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { DemoRest } from '../servicios/demo-rest';
import { inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  imports: [FormsModule],
  templateUrl: './form-demo.html',
  styleUrl: './form-demo.css',
})
export class FormDemo {

  private demoService = inject(DemoRest);

  onGuardar(form: NgForm) {
    console.log('Data del formulario:', form.value);
    this.demoService.getParams().subscribe({
      next: (data) => console.log('Datos recibidos del servicio:', data),
      error: (err) => console.error('Error al llamar al servicio:', err),
    });

  }

}