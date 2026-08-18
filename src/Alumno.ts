export class Alumno {
  constructor(
    public nombre: string,
    public edad: number
  ) {}

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
