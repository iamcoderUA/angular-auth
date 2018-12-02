export class User {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;

  constructor(obj?: any) {
    for (const field in obj) {
      if (this.hasOwnProperty(field) && typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }
  }
}
