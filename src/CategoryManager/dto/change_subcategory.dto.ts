import {IsNumber, IsOptional} from 'class-validator';

export default class Add_categoryDto {

    @IsNumber()
    category_id: number;


    @IsNumber()
    subcategory_id: number;


    constructor(data: Partial<Add_categoryDto>) {
        Object.assign(this, data);
    }

}
