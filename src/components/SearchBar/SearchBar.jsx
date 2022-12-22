import { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css';

export const SearchBar = ({ onSubmit, value }) => {
  const [query, setQuery] = useState('');

  const handelChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.currentTarget.elements.query.value.trim());
    if (query.trim() === '') {
      toast.error('Pleas enter search word!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <div className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <button type="submit" className={css.search_form_button}>
          <span className={css.search_form_button_label}>Search</span>
        </button>
        <input
          className={css.search_form_input}
          type="text"
          name="query"
          autoComplete="off"
          onChange={handelChange}
          value={query}
          autoFocus
          placeholder="Enter your search name"
        />
      </form>
    </div>
  );
};
