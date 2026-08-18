import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
 test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    const resultado = alumno.esMayorDeEdad();

    expect(resultado).toBe(true);
  });
  
  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17);

    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("si el alumno es menor de edad", () => {
    const alumno = new Alumno("Pedro", 17);

    const resultado = alumno.obtenerEstado();
   expect(resultado).toBe(false);
  });

  test("si el alumno es mayor de edad", () => {
    const alumno = new Alumno("Ana", 25);

    const resultado = alumno.obtenerEstado();
    expect(resultado).toBe(true);
  });


});