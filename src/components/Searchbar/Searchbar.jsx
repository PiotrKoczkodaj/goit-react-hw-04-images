import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ submit, inputValue }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.form} onSubmit={submit}>
        <button type="submit" className={styles.button}>
          <span className={styles.btnLabel}>Search</span>
        </button>
        <input
          onChange={inputValue}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
};
