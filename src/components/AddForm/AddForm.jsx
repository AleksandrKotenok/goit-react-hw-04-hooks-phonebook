import PropTypes from "prop-types";
import { useState } from "react";
import s from "../AddForm/AddForm.module.css";

export const AddForm = ({ submit }) => {
  const [state, setState] = useState({ name: "", number: "" });

  const inputChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });
  const onSubmit = (event) => {
    event.preventDefault();
    submit(state);
    setState({ name: "", number: "" });
  };

  return (
    <section className={s.addForm}>
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.label} htmlFor={"name"}>
          Name:
        </label>
        <input
          id={"name"}
          className={s.input}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
        <label className={s.label} htmlFor={"tel"}>
          Tel:
        </label>
        <input
          id={"tel"}
          className={s.input}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};
AddForm.propTypes = {
  submit: PropTypes.func,
};
