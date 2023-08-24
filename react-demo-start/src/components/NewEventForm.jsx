import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm(props) {
    const [title,setTitle] = useState('');
    const [Date,setDate] = useState('');
    const [location,setLocation] = useState('Tirunelveli');


    const  resetForm = () =>{
      setTitle('');
      setDate('');
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const event = {
       title : title,
       Date : Date,
       location:location,
       id : Math.round(Math.random() * 100)
    }
    props.addEvent(event);
    resetForm();
    }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
      <label>
        <span>Event Title:</span>
        <input type="text" 
        onChange={(e)=>setTitle(e.target.value)} 
        value={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" 
        onChange={(e)=>setDate(e.target.value)} 
        value={Date} />
      </label>
      <label>
        <span>Location : </span>
        <select onChange={(e)=>setLocation(e.target.value)} >
          <option value="tirunelveli" >Tirunelveli</option>
          <option value="thenkasi"  >Thenkasi</option>
          <option value="tuticorin" >Tuticorin</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}