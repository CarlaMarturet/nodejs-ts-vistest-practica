import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";
import { Profesor } from "../src/Profesor";

describe("Porfesor", () => {

    test("matriculación de profesor", () => {
        const profesor = new Profesor("José", 12345);
        expect(profesor.nombre).toBe("José");
        expect(profesor.legajo).toBe(12345);
    });
});


