import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";
import { Materia } from "../src/Materia";

describe("Materia", () => {
  test("crear una materia con nombre, año y carrera", () => {
    const materia = new Materia("Matemáticas", 2023, "Ingeniería");
    expect(materia.nombre).toBe("Matemáticas");
    expect(materia.anio).toBe(2023);
    expect(materia.carrera).toBe("Ingeniería");

  });

  test("verificar si alumno esat en la meteria", () => {
    const materia = new Materia("Matemáticas", 2023, "Ingeniería");
    const alumno = new Alumno("Juan", 20);

    expect(materia.nombre).toBe("Matemáticas");
    expect(materia.anio).toBe(2023);
    expect(materia.carrera).toBe("Ingeniería");
    expect(alumno.nombre).toBe("Juan");


  });


});