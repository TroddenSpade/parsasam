const config = {
    PORT:6666,
    DATABASE : "mongodb://localhost:27017/mywebpage",
    SECRET : "0000",
    SERVER : "http://localhost:6666"
}

exports.get = function get(){
    return config;
};