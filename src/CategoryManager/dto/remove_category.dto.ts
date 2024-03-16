import {IsNumber} from 'class-validator';

export default class Remove_categoryDto {

    @IsNumber()
    category_id: string;

    constructor(data: Partial<Remove_categoryDto>) {
        Object.assign(this, data);
    }

}
