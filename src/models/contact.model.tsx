export type TContact = {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
  profilePicture: string;
  isFavorite: boolean;
};

export class Contact {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
  profilePicture: string;
  isFavorite: boolean;

  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  constructor(contact: TContact) {
    this.id = contact.id;
    this.name = contact.name;
    this.surname = contact.surname;
    this.phoneNumber = contact.phoneNumber;
    this.emailAddress = contact.emailAddress;
    this.profilePicture = contact.profilePicture;
    this.isFavorite = contact.isFavorite;
  }
}
