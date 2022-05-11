import axios from "axios";
import { formatSearchQuery } from "utils/generic.util";
import { BASE_API_URL } from "constants/api.constants";
import { Contact, TContact } from "models/contact.model";
import HttpClient from "./generic.http";

class ContactsHttp extends HttpClient {
  constructor() {
    super(BASE_API_URL);
  }

  public async getContacts(query = ""): Promise<Contact[]> {
    const { data } = await axios.get(this.url("/contacts"));
    const contacts: Contact[] = data.map(
      (contact: TContact) => new Contact(contact)
    );

    return contacts.filter(({ fullName }) =>
      formatSearchQuery(fullName).includes(formatSearchQuery(query))
    );
  }

  public async replaceContact({ id, ...contact }: TContact): Promise<Contact> {
    const { data } = await axios.put(this.url(`/contacts/${id}`), contact);

    return new Contact(data);
  }

  public async updateContact(id: number, body: any): Promise<Contact> {
    const { data } = await axios.patch(this.url(`/contacts/${id}`), body);

    return new Contact(data);
  }
}

export default ContactsHttp;
