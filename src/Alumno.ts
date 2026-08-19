import { Persona } from "./Persona";

export class Alumno extends Persona {
  edad: number;

  constructor (nombre: string, legajo: number, edad: number) {
    super(nombre, legajo);
    this.edad = edad;
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

   esMenosDeEdad(): boolean {
    return this.edad < 18;
  }

  obtenerEstado(): boolean {
    if (this.esMayorDeEdad()) {
      return true;
    } else if (this.esMenosDeEdad()) {
      return false;
    }

    return false;
  }
}
