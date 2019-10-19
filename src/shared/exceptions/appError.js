//AppError - Base exception class. Inherit other exceptions from this class.
export class AppError {    
    constructor(originalError) {
        this.originalError = originalError;
    }

    getMessage = () => {
        return this.originalError.message? this.originalError.message : JSON.stringify(this.originalError);
    }
}
