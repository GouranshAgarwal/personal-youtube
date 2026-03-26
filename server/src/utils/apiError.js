class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
    ){
        super(message); // initializes constructor of Error class which is new Error(message) -- only takes message
        this.name = this.constructor.name; // changes Error: something went wrong --> ApiError: something went wrong
        this.statusCode = statusCode;
        this.data = null;
        // this.message = message; is not needed since we set the message in super();
        this.success = false;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor); // provides stack trace of error
    }
}

export { ApiError }