import { AddForm } from "../AddForm/AddForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import React, { Component, Fragment } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsFromLs = JSON.parse(localStorage.getItem("contacts"));
    if (contactsFromLs) this.setState({ contacts: contactsFromLs });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  submit = ({ name, number }) => {
    const existingName = this.state.contacts.find((contact) => contact.name === name);
    if (existingName) {
      alert(`${name} existing name`);
      return;
    }
    const newRecord = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newRecord, ...contacts],
    }));
  };
  filterContacts = () => {
    return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };
  filterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <AddForm submit={this.submit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} input={this.filterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </Fragment>
    );
  }
}
export default App;
