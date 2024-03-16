export class ResponseObject {
    message: string;
    http_status: number;
    data: object;

    constructor(message: string = "", http_status: number = 200, data: object = {}) {
        this.message = message;
        this.http_status = http_status;
        this.data = data;
    }
}