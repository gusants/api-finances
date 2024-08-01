export interface IModel {
  id: string;
  name: string;
  molding: number;
  pilot: number;
  graduation: number;
  stylist: number;
  quantity: number;
  productionPrice: number;
  taxes?: number;
  tissues: ITissueModel[];
  dispatch: IDispatchModel[];
  aviation: IAviationModel[];
}

export interface ITissueModel {
  id: string;
  name: string;
  price: number;
  meters: number;
}

export interface IAviationModel {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IDispatchModel {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
