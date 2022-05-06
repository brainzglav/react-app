import axios from "axios";
import { formatSearchQuery } from "components/utils/generic.util";
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
}

export default ContactsHttp;
