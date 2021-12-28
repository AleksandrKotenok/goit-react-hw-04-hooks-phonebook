import { AddForm } from "../AddForm/AddForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Fragment, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem("contacts")) ?? []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const submit = ({ name, number }) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} existing name`);
      return;
    }
    const newRecord = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([newRecord, ...contacts]);
  };
  const filterContacts = () => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const deleteContact = (contactId) => setContacts(contacts.filter((contact) => contact.id !== contactId));
  const filterChange = (e) => setFilter(e.currentTarget.value);

  const filteredContacts = filterContacts();
  return (
    <Fragment>
      <h1>Phonebook</h1>
      <AddForm submit={submit} />
      <h2>Contacts</h2>
      <Filter filter={filter} input={filterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Fragment>
  );
}
