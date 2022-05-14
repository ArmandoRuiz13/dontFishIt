const Reader = require("./../../lib/utils/Reader");

describe("Prueba unitaria para Reader ", () =>{
    test("Prueba 1 Imprime lista de objetos de los datos de expecies_datos package.json", () => {
        const especiesInfo = Reader.readJsonFile("especies_datos.json");
        expect(especiesInfo).not.toBeUndefined();
    });
});