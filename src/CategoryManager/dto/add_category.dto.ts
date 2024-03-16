import {IsNotEmpty, IsString, Length} from 'class-validator';

export default class Add_categoryDto {

    @IsString()
    @IsNotEmpty()
    @Length(1, 30)
    category_name: string;

    constructor(data: Partial<Add_categoryDto>) {
        Object.assign(this, data);
    }

}
