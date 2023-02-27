import React from 'react';
import './AppFilter.css'
import 'bootstrap/dist/css/bootstrap.css';
const AppFilter = () => {
    return (
      <div className={'btn-group'}>
          <button
            type={"button"}
            className="btn btn-light">
              Все сотрудники
          </button>
          <button
            type={"button"}
            className="btn btn-outline-light">
              На повышение
          </button>
          <button
            type={"button"}
            className="btn btn-outline-light">
              Зп больше 1000$
          </button>
      </div>
    );
};

export default AppFilter;
