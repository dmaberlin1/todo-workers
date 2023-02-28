import React from 'react';
import WorkersListItem from "../WorkersListItem";
import './WorkersList.css'
import 'bootstrap/dist/css/bootstrap.css';


const WorkersList = (props) => {
    const {data,onDelete,onToggleIncrease,onToggleRise,onToggleProp} = props



    return (
      <ul className={'app-list list-group'}>
          {data.map((worker) => {
              return <WorkersListItem
                key={worker.id}
                {...worker}
                onDelete={()=>onDelete(worker.id)}
                onToggleIncrease={()=>onToggleIncrease(worker.id)}
                onToggleRise={()=> onToggleRise(worker.id)}
                onToggleProp={(e)=>
                  onToggleProp(worker.id,e.currentTarget.getAttribute('data-toggle'))}
                increase={worker.increase}
                rise={worker.rise}
              ></WorkersListItem>
          })}
      </ul>
    );
};

export default WorkersList;
