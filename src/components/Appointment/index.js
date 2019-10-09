// We can use import Appointment from "components/Appointment"; to import a component from the src/components/Appoinment/index.js module. It is an alternative to import Appointment from "components/Appointment/Appointment";.


import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";
import classnames from "classnames";
import Header from "./header"
import Show from "./show"
import Empty from "./empty"
import useVisualMode from "../../hooks/useVisualMode"
import Form from "./form"
import Confirm from "./confirm"
import Status from "./status"
import Error from "./error"


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const CONFIRM = "CONFIRM"
  const STATUS = "STATUS"
  const EDIT = "EDIT"
  const ERROR = "ERROR"
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = "ERROR_DELETE"
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(STATUS)

    
    props.bookInterview(props.id, interview)
    .then((res) => {
      transition(SHOW)
    })
    .catch((err) => {
      transition(ERROR_SAVE)
    })
  }

  function onConfirm(id) {
    transition(STATUS)
    props.cancelInterview(props.id)
    .then((res) => {
      transition(EMPTY)
    })
    .catch(((err) => {
      transition(ERROR_DELETE)
    })
    )}

  function errorSave() {
    back();
  }

  function errorDelete() {
    transition(SHOW)

  }

  function onCancel() {
    transition(SHOW)
  }

  function onDelete(id) {
    transition(CONFIRM)
  }

  function onEdit() {
    transition(EDIT)
  }

  return (
  
  <article className="appointment" data-testid="appointment">
    <header>{props.time}</header>
    {mode === EMPTY && <Empty onAdd={(event) => {transition(CREATE)}} />}
{mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer.name}
    onDelete = {onDelete}
    appointmentID ={props.id}
    transition = {transition}
    onConfirm = {onConfirm}
    onEdit = {onEdit}
  />
)}
{mode === CREATE && (
<Form onCancel = {(event) => {transition(EMPTY)}} onSave = {save}
interviewers={props.interviewers}
/>
)}
{mode === CONFIRM && ( 
<Confirm 
    message="Delete the appointment?"
    onConfirm={onConfirm}
    onCancel={onCancel}
    />
)}
{mode === STATUS && ( 
  <Status 
      message="Deleting"
      />
  )}
{mode === EDIT && ( 
<Form onCancel = {(event) => {transition(SHOW)}} 
  onSave={save}
  interviewers={props.interviewers}
  name={props.interview.student}
/>
)}
{mode === ERROR_DELETE && ( 
  <Error
  message="Could not delete appointment."
  onClose={errorDelete} 
  />
  )}
{mode === ERROR_SAVE && ( 
<Error
message="Could not save appointment."
onClose={errorSave} 
/>
)}

      
  </article>
  )
}


