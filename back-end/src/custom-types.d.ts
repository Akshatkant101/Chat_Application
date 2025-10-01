interface AuthUser {
  id: number;
  name: string;
  email: string;
}
// overwriting express types to declare user too 
declare namespace Express {
  export interface Request {
    user: ?AuthUser;
  }
}
