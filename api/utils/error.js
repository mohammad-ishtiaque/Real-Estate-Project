const errorHandler = (statuCode, message) => {
    const err = new Error();
    err.statusCode = statuCode;
    err.statusCode = statuCode;
    err.message = message;
    return err;
}

module.exports = errorHandler;