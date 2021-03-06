import React, { useState } from "react";

import InterviewerList from "components/InterviewerList"
import Button from "components/Button";




export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer ||  (props.interviewers && props.interviewers.length > 0 ? props.interviewers[0].id : null));
  const [error, setError] = useState("");

    const Reset = () => {
    setName("") 
    setInterviewer(null);
    return;
  };

    const Cancel = () => {
    props.onCancel();
    Reset();
  }


  const Save = () => {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  
    setError("");
    props.onSave(name, interviewer);
    Reset();
  }
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        value={name}
        type="text"
        placeholder="Enter Student Name"
        onChange={event => setName(event.target.value)}
        data-testid="student-name-input"
 
      />
          <section className="appointment__validation">{error}</section>

    </form>
    <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={Cancel}>Cancel</Button>
      <Button confirm onClick={Save} >Save</Button>
    </section>
  </section>
</main>
  )
}
