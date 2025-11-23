export interface IdentityData {
  firstName: string;
  lastName: string;
  fullName: string;
  password: string;
  gender: 'Male' | 'Female';
}

export interface GenerateOptions {
  includeSymbols: boolean;
  includeNumbers: boolean;
}