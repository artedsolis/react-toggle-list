import './App.css';
import { BiCalendar, BiArchive } from 'react-icons/bi';
import Search from './components/Search'; 
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import appointmentList from './data.json';

import {  } from 'react-icons/bi';

function App() {
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
          />
        ))
       }
    </ul>

  </div>
  );
}

export default App;
