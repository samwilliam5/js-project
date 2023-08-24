import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';



function App() {
      const[showmodal,setShowModal] = useState(false);
      const [title,setTitle] =   useState([]);
      const [show,setShow] = useState(true);
      const handleDelete = (id) =>{
           setTitle((prev)=>{
          return prev.filter((title)=>{
              return id !== title.id
            })
          })
      }
      const subtitle = "All the latest events in Marioland"

      const addEvent = (event) =>{
        setTitle((prev)=>{
          return  [...prev, event];
        })
        setShowModal(false);
      }

      const handleModal = () =>{
        setShowModal(false);
      };

  return (
    <div className="App">
      
      <Title title="Marioland Events" subtitle={subtitle} />
      <br />
     {show && (<div>
      <button  onClick={() => setShow(false)}>HIDE EVENTS</button>
      </div>)}
     {!show && (<>
        <button onClick={() => setShow(true)}>SHOW EVENTS</button>
        
      </>) }
    {show && <EventList title = {title} handleDelete = {handleDelete}/>}
    {/* title.map((titles,index)=>(
        <React.Fragment key={titles.id}>
          <h2>{index}-----{titles.title}</h2>
          <button onClick={() => handleDelete(titles.id)}>Delete</button>
        </React.Fragment>
    )) */}
{ showmodal &&  (<Modal handleModal = {handleModal} > 
    <NewEventForm addEvent={addEvent}/>
    </Modal>) }
    <div>
    <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
    </div>
  )
}


export default App;
