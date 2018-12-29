import { IsString, IsNumber } from 'class-validator';

export class CreateItemDTO {
    @IsString() readonly name: string;

    @IsNumber() readonly price: number;
}