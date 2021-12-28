import { Component } from 'react';
import s from '../AddForm/AddForm.module.css';

export class AddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <section className={s.addForm}>
        <form className={s.form} onSubmit={this.onSubmit}>
          <label className={s.label}>Name:</label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputChange}
          />
          <label className={s.label}>Tel:</label>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.inputChange}
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
