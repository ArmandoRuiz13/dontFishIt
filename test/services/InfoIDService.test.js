const InfoID = require('./../../lib/services/InfoIDService')
const Reader = require("./../../lib/utils/Reader");
const especiesInfo = Reader.readJsonFile("especies_datos.json");

describe("Prueba unitaria para InfoID ", () =>{
    test("Prueba 1 Imprime lista de objetos de los datos de expecies_datos package.json por ID", () => {
        const especie= InfoID.GetAll(especiesInfo,'1')
        expect(especie).not.toBeUndefined();
    });
    test("Prueba 2 Imprime lista de los nombres de todos los peces actualmente almacenados", () => {
        const especiesname= InfoID.GetAllNames(especiesInfo)
        expect(especiesname).toContain("Atun");
        expect(especiesname).toContain("Bacalao de profundidad");
    });
});