/* eslint-disable max-classes-per-file */
type ErrorData = { [key: string]: any };

class CustomError extends Error {
  constructor(
    public message: string,
    public code: string,
    public status = 500,
    public data: ErrorData = {},
  ) {
    super();
  }
}

// custom InvalidTokenError
export class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid.') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

// custom BadUserInputError
export class BadUserInputError extends CustomError {
  constructor(errorData: ErrorData) {
    super('There were validation errors.', 'BAD_USER_INPUT', 400, errorData);
  }
}

// custom RouteNotFoundError
export class RouteNotFoundError extends CustomError {
  constructor(originalUrl: string) {
    super(`Route ${originalUrl} does not exist.`, 'ROUTE_NOT_FOUND', 404);
  }
}

// custom EntityNotFoundError
export class EntityNotFound extends CustomError {
  constructor(enityName: string) {
    super(`${enityName} not found.`, 'ENTITY_NOT_FOUND', 404);
  }
}
