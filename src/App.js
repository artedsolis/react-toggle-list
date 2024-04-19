import './App.css';
import { useState, useEffect, useCallback } from 'react';

import { BiCalendar, BiArchive } from 'react-icons/bi';
import Search from './components/Search'; 
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
// import appointmentList from './data.json';

import {  } from 'react-icons/bi';

function App() {
  // use state for appointmentList
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
    <h1 className="text-5xl">
      <BiArchive className='inline-block' /> Your appointments </h1>
    <AddAppointment />
    <Search />

    <ul className="divide-y divide-gray-200">
      {appointmentList.map(appointment => (
          <AppointmentInfo key={appointment.id} 
          appointment={appointment} 
          onDeleteAppointment={(appointmentId) => {
            setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId));
          }}
          />
        ))
       }
    </ul>

  </div>
  );
}

export default App;
