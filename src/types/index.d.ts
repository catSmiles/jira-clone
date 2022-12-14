declare namespace Express {
  export interface Request {
    currentUser: import('entities').User;
  }
  export interface Response {
    respond: (data: any) => void;
  }
}
