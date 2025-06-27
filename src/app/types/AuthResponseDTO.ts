// 1. Define the type separately
export type AuthResponseType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  image: string;
  accessToken: string;
  refreshToken: string;
};

// 2. Define the class
export class AuthUser {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public gender: 'male' | 'female',
    public image: string,
    public accessToken: string,
    public refreshToken: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  isFemale(): boolean {
    return this.gender === 'female';
  }
}
