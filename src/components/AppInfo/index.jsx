import React from 'react';
import './AppInfo.css'
import 'bootstrap/dist/css/bootstrap.css';
const AppInfo = () => {
    return (
      <div className={'app-info'}>
          <h1>Учет сотрудников <span>Intel</span></h1>
          <h2>Общее число сотрудников : </h2>
          <h2>Премию получат:</h2>
      </div>
    );
};

export default AppInfo;
