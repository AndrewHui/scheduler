// We can use import Appointment from "components/Appointment"; to import a component from the src/components/Appoinment/index.js module. It is an alternative to import Appointment from "components/Appointment/Appointment";.


import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";
import classnames from "classnames";
import Header from "./header"
import Show from "./show"
import Empty from "./empty"

export default function Appointment(props) {


  return (
  
  <article className="appointment">
    <header>{props.time}</header>
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name} /> : <Empty /> }
  </article>
  )
}