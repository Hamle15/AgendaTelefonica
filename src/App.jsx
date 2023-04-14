import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Hamlet",
      lastName: "Pirazan",
      phone: "313643306",
      address: "Carrera 33",
    },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const editContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="container mt-5">
      <h1>Contact List</h1>
      <ContactForm onAdd={addContact} />
      <ContactList
        className="center"
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={editContact}
      />
    </div>
  );
}

export default App;
