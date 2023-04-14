import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2>Contact List</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
