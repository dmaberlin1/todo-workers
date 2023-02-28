import React from 'react';
import './AppInfo.css'
import 'bootstrap/dist/css/bootstrap.css';
const AppInfo = (props) => {
    const {workersCount,increasedCount,company}=props
    return (
      <div className={'app-info'}>
          <h1>Учет сотрудников <span>{company}</span></h1>
          <h2>Общее число сотрудников : {workersCount} </h2>
          <h2>Премию получат: {increasedCount}</h2>
      </div>
    );
};

export default AppInfo;
