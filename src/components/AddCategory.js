import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

  const { setCategories } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category -- {inputValue}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="Search..."
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

/*AddCategory.defaultProps = {
  setCategories: () => {},
}*/
