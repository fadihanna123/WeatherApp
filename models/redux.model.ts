export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class TempReducerTypes {
  constructor(public tempReducer: number) {}
}

export class DecReducerTypes {
  constructor(public decReducer: string) {}
}

export class CityNameReducerTypes {
  constructor(public cityNameReducer: string) {}
}

export class CityInputReducerTypes {
  constructor(public cityInputReducer: string) {}
}

export class ErrorReducerTypes {
  constructor(public errorReducer: string) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

export class ViewCurrentReducerTypes {
  constructor(public viewCurrentReducer: boolean) {}
}

export class ViewSearchBoxReducerTypes {
  constructor(public viewSearchBoxReducer: boolean) {}
}

export class CurrentLocReducerTypes {
  constructor(public currentLocReducer: string) {}
}

export class CurrentLoadingReducerTypes {
  constructor(public currentLoadingReducer: boolean) {}
}

export class CurrentTempReducerTypes {
  constructor(public currentTempReducer: string) {}
}

export class CurrentDecReducerTypes {
  constructor(public currentDecReducer: string) {}
}
