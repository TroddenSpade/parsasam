const config = {
    PORT:3000,
    DATABASE : "mongodb://localhost:27017/mywebpage",
    SECRET : "0000",
    SERVER : "http://localhost:3000"
}

exports.get = function get(){
    return config;
};