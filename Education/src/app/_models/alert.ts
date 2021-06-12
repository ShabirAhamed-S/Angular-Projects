
export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

export class Alert {
    id: string='';
    type: AlertType[]=[];
    message: string='';
    autoClose: boolean=false;
    keepAfterRouteChange: boolean= false;
    fade: boolean= false;
    // type: any;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

