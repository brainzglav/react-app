export type TContact = {
  name: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
  profilePicture: string;
};

export class Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
  profilePicture: string;

  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  constructor(contact: TContact) {
    this.name = contact.name;
    this.surname = contact.surname;
    this.phoneNumber = contact.phoneNumber;
    this.emailAddress = contact.emailAddress;
    this.profilePicture = contact.profilePicture;
  }
}
