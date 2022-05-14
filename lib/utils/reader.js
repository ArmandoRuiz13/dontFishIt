const fs = require('fs');

class Reader{

    static readJsonFile(path){

        const rawdata = fs.readFileSync(path);
        const especiesInfo = JSON.parse(rawdata);

        return especiesInfo;
    }

}

module.exports = Reader;