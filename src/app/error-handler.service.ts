import { ErrorHandler, Injectable } from '@angular/core'

@Injectable()
export class ErrorHandlerService extends ErrorHandler{
    
    constructor() {
        super();      
    }

    handleError(error){
        let date = new Date();
        console.error('Error:',{
            timestamp:date.toISOString(),
            message:error.message,
            zone:error.zone,
            task:error.task
        });
    }

}