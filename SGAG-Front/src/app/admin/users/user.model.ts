export class User {
  id: number;
  username: string;
  password: string;
  profile: UserProfile;
  work: Roles;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
}

export class UserProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class Roles {
  rol: string;
}

export class UserContacts {
  phone: string;
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}
