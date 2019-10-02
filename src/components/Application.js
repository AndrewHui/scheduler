import React, { useState } from "react";
import ReactDOM from "react-dom";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment/index.js";



const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Andrew Hui",
      interviewer: {
        id: 2,
        name: "Kobe Bryant",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Bilbo Baggins",
      interviewer: {
        id: 3,
        name: "James Harden",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Thomas Bryant",
      interviewer: {
        id: 4,
        name: "Bradley Beal",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 6,
    time: "5pm"
  },
  {
    id: 7,
    time: "6pm"
  }

];


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


export default function Application(props) {


  const [day, setDay] = useState("Monday");

  const list = appointments.map(appointment => {
    
    return (
    <Appointment 
    key={appointment.id} {...appointment}
    />
    
    )
  })

  // const days = props.days.map(day => 

  //   <DayListItem 
  //     key={day.id}
  //         name={day.name}
  //         spots={day.spots}
  //   />
  // );


  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">

<DayList
  days={days}
  day={day}
  setDay={setDay}
/>

</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {list}
      </section>
    </main>
  );
}



