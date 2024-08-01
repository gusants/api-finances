import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDispatchDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class UpdateDispatchDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;
}
