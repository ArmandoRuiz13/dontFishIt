const FizzInfo = require("../../lib/controllers/FizzInfoController");

describe("Prueba unitaria para FizzInfoController ", () =>{
    test("Prueba 1 Imprime lista de objetos de los datos de expecies_datos package.json", () => {
        const allinfo = FizzInfo.getAllInfo()
        expect(allinfo).not.toBeUndefined()
    });
    test("Prueba 2 Imprime lista de objetos de los datos de expecies_datos package.json por ID", () => {
        const especie= FizzInfo.getFizzByID('1')
        expect(especie).not.toBeUndefined();
    });
    test("Prueba 2 Imprime lista de los nombres de todos los peces actualmente almacenados", () => {
        const especiesname= FizzInfo.getAllNames()
        expect(especiesname).toContain("Atun");
        expect(especiesname).toContain("Bacalao de profundidad");
    });
});