import React from "react";
import style from './EventList.module.css';
export default function EventList(props) {
  return (
    <div>
        { props.title.map((titles,index)=>(
        <div key={titles.id} className={style.card}>
          <h2>{index}-----{titles.title}</h2>
          <span>{titles.Date} - {titles.location}</span>
          <br />
          <button onClick={() => props.handleDelete(titles.id)}>Delete</button>
        </div>
    )) }
    </div>
  )
}
