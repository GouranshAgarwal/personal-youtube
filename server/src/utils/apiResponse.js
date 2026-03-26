class ApiResponse {
    constructor(
        statusCode,
        data,
        message = "success",
    ){
        this.statusCode = statusCode;  // info -- 100 - 199; success -- 200 - 299; redirect -- 300 - 399; 
        this.data = data;              // client error -- 400 - 499; server error -- 500 - 599;
        this.message = message;
        this.success = statusCode < 400;
    }
}