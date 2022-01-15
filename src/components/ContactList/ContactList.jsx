import PropTypes from "prop-types";
import s from "../ContactList/ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <p className={s.name}>{contact.name}:</p>
            <p className={s.number}>{contact.number}</p>
            <button className={s.button} type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  updatedContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
