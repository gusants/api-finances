import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTissueDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class UpdateTissueDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;
}
