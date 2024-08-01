import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateModelDto {
  @IsString()
  name: string;

  @IsNumber()
  molding: number;

  @IsNumber()
  pilot: number;

  @IsNumber()
  graduation: number;

  @IsNumber()
  stylist: number;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  productionPrice: number;

  @IsNumber()
  @IsOptional()
  @Max(1)
  taxes?: number;

  @ValidateNested()
  @Type(() => TissueModelDto)
  tissues: TissueModelDto[];

  @ValidateNested()
  @Type(() => DispatchModelDto)
  dispatch: DispatchModelDto[];

  @ValidateNested()
  @Type(() => AviationModelDto)
  aviation: AviationModelDto[];
}

export class TissueModelDto {
  @IsString()
  id: string;
  @IsNumber()
  meters: number;
}

export class DispatchModelDto {
  @IsString()
  id: string;
  @IsNumber()
  quantity: number;
}

export class AviationModelDto {
  @IsString()
  id: string;
  @IsNumber()
  quantity: number;
}

export class UpdateModelDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNumber()
  molding?: number;

  @IsNumber()
  @IsOptional()
  pilot?: number;

  @IsNumber()
  @IsOptional()
  graduation?: number;

  @IsNumber()
  @IsOptional()
  stylist?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  quantity?: number;

  @IsNumber()
  @IsOptional()
  productionPrice?: number;

  @IsNumber()
  @IsOptional()
  @Max(1)
  taxes?: number;

  @ValidateNested()
  @Type(() => TissueModelDto)
  tissues: TissueModelDto[];

  @ValidateNested()
  @Type(() => DispatchModelDto)
  dispatch: DispatchModelDto[];

  @ValidateNested()
  @Type(() => AviationModelDto)
  aviation: AviationModelDto[];
}
