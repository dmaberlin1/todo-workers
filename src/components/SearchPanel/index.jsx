import React from 'react';
import './SearchPanel.css'
import 'bootstrap/dist/css/bootstrap.css';
const SearchPanel = () => {
    return (
      <input type="text"
      className={'form-control search-input'}
             placeholder={'Найти сотрудника'}
      />
    );
};

export default SearchPanel;
