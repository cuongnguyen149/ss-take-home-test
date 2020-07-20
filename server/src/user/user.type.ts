export enum HearFromSource {
  WEBSITE = 'WEBSITE',
  FRIENDS = 'FRIENDS',
  OTHER = 'OTHER'
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hearFromSource: HearFromSource;
  isAgreeWithTerm: boolean;
}

