import React from 'react';
import WorkersListItem from "../WorkersListItem";
import './WorkersList.css'
import 'bootstrap/dist/css/bootstrap.css';


const WorkersList = (props) => {
    const {data,onDelete,onToggleIncrease,onToggleRise} = props


    return (
      <ul className={'app-list list-group'}>
          {data.map((worker) => {
              return <WorkersListItem
                key={worker.id}
                {...worker}
                onDelete={()=>onDelete(worker.id)}
                onToggleIncrease={()=>onToggleIncrease(worker.id)}
                onToggleRise={()=>onToggleRise(worker.id)}
                increase={worker.increase}
              ></WorkersListItem>
          })}
      </ul>
    );
};

export default WorkersList;
