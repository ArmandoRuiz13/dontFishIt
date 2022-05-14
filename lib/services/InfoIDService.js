class InfoID{
    static GetAll(especiesInfo,id){
        const InfoporID= especiesInfo.filter((especie) => especie.id == id);
        return InfoporID;
    }
    static GetAllNames(especiesInfo){
        const allNames = especiesInfo.map((especie) =>especie.nombre)
        return allNames
    }
}

module.exports=InfoID