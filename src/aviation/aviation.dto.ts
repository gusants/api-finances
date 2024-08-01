import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAviationDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class UpdateAviationDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;
}
