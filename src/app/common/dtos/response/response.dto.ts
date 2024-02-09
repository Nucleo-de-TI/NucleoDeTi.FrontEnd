export interface IDefaultResponse {
  status: number;
  message: string;
  content?: any;
}

export interface IOkResponse extends IDefaultResponse {}

export interface IErrorResponse extends IDefaultResponse {}

export interface IBadRequestResponseErrors {
  field: string;
  constraints: { [key: string]: string };
}

export interface IBadRequestResponse {
  errors: IBadRequestResponseErrors[];
}
