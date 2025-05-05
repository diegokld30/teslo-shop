import { IsArray, IsIn, isIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    tittle: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsString()
    @IsOptional()
    slug: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({each:true})
    @IsArray()
    sisez: string[]

    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;
}
