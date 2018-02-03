//#region Base Classes

/**
 * This is the base class for all Primary Key'd entities.
 */
export class Entity {
  id: any;
}

export class ResponseBase {
  success: boolean;
  errorMessage: string;
  data: {} | any[];
}

//#endregion
