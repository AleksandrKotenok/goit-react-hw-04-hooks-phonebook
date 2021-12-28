import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

export const Filter = ({ filter, input }) => {
  return (
    <form className={s.form}>
      <label className={s.label}>Find contact by name: </label>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  input: PropTypes.func,
};
