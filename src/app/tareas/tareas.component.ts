import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Tarea } from '../Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent{

  tareas: Tarea[] = [
    {
      Nombre: "Primer tarea.",
      Descripcion: "Ingresar al gestor de tareas.",
      FechaLimite: null,
      Importancia: "Importante",
      Solicitante: {
        NombreSolicitante: "Ninguno",
        Contacto: "Ninguno",
      },
      Entregada: true
    }
  ];

  constructor(public dataService: DataService) { 
    
  }

  agregarTarea(Nombre, Descripcion, FechaLimite, Importancia, NombreSolicitante, Contacto){

    var tarea = {
      Nombre: Nombre.value,
      Descripcion: Descripcion.value,
      FechaLimite: FechaLimite.value,
      Importancia: Importancia.value,
      Solicitante: {
        NombreSolicitante: NombreSolicitante.value,
        Contacto: Contacto.value,
      },
      Entregada: false
    };

    console.log(tarea);

    this.tareas.push(tarea);

    //limpia campos
    Nombre.value = '';
    Descripcion.value = '';
    FechaLimite.value = '';
    Importancia.value = '';
    NombreSolicitante.value = '';
    Contacto.value = '';
    //limpia campos

    this.dataService.tareas = this.tareas;

    return false;
  }//fin del metodo

  eliminaTarea(tarea){
    for(var i = 0; i < this.tareas.length; i++){
      if(tarea == this.tareas[i]){
        this.tareas.splice(i, 1);
      }
    }
  }

  tareaCumplida(tarea){
    for(var i = 0; i < this.tareas.length; i++){
      if(tarea == this.tareas[i]){
        this.tareas[i].Entregada = true;
      }
    }
  }

/*
  

  ngOnInit(): void {
  }
*/
}
