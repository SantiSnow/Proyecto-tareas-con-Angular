import { Injectable } from '@angular/core';
import { Tarea } from '../Tarea';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tareas: Tarea[] = [];

  constructor() { }
}
