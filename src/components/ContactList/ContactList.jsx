import PropTypes from "prop-types";
import s from "../ContactList/ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {contacts.map((data) => (
          <li className={s.item} key={data.id}>
            <p className={s.name}>{data.name}:</p>
            <p className={s.number}>{data.number}</p>
            <button className={s.button} type="button" onClick={() => deleteContact(data.id)}>
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
