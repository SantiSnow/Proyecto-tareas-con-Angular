import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tareas-terminadas',
  templateUrl: './tareas-terminadas.component.html',
  styleUrls: ['./tareas-terminadas.component.css']
})
export class TareasTerminadasComponent{

  constructor( public dataService: DataService) {
    
  }


}
