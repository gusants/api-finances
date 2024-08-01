import { Injectable } from '@nestjs/common';
import {
  Aviation,
  Dispatchs,
  ModelAviation,
  ModelDispatch,
  Models,
  ModelTissues,
  Tissues,
} from '@prisma/client';
import { IModel } from './model.interface';

type AviationType = ModelAviation & { aviation: Aviation };
type DispatchType = ModelDispatch & { dispatch: Dispatchs };
type TissuesType = ModelTissues & { tissue: Tissues };

@Injectable()
export class ModelMapper {
  map(
    dto: Models & {
      aviation?: AviationType[];
      dispatch?: DispatchType[];
      tissues?: TissuesType[];
    },
  ): IModel {
    return {
      ...dto,
      aviation:
        dto?.aviation?.map((aviation) => ({
          id: aviation?.aviationId,
          name: aviation?.aviation?.name,
          price: aviation?.aviation?.price,
          quantity: aviation?.quantity,
        })) ?? [],
      dispatch:
        dto?.dispatch?.map((dispatch) => ({
          id: dispatch?.dispatchId,
          name: dispatch?.dispatch?.name,
          price: dispatch?.dispatch?.price,
          quantity: dispatch?.quantity,
        })) ?? [],
      tissues:
        dto?.tissues?.map((tissue) => ({
          id: tissue?.tissueId,
          name: tissue?.tissue?.name,
          price: tissue?.tissue?.price,
          meters: tissue?.meters,
        })) ?? [],
    };
  }
}
