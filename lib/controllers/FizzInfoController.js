const InfoID = require('./../../lib/services/InfoIDService')
const Reader = require("./../../lib/utils/Reader");
const especiesInfo = Reader.readJsonFile("especies_datos.json");

class FizzInfo{
    static getAllInfo(){
        return especiesInfo
    }
    static getFizzByID(id){
        const especie = InfoID.GetAll(especiesInfo,id)
        return especie
    }
    static getAllNames(){
        const especiesname= InfoID.GetAllNames(especiesInfo)
        return especiesname
    }
}
module.exports = FizzInfo