export class GenericError extends Error {
    statusCode

    constructor(message, statusCode = 400) {
        super(message)
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor)
    }
}

export class ServiceError extends GenericError { };

export class NotFoundError extends GenericError {
    constructor(message) {
        super(message, 404)
    }
}

export class ValidationError extends GenericError {
    errors = []
    constructor(errors) {
        message = `${errors[0]}`
        super(message, 422)
        this.errors = errors
    }
}

export class AuthenticationError extends GenericError {
    constructor(message) {
        super(message, 401)
    }
}

export class AuthroizationError extends GenericError {
    constructor(message = 'You are not authorized to perform this action'){
        super(message, 403)
    }
}