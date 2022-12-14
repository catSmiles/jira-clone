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

export class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid.') {
    super(message, 'INVALID_TOKEN', 401);
  }
}
