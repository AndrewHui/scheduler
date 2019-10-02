import React, { useState } from "react";

import InterviewerList from "components/InterviewerList"
import Button from "components/Button";




export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

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
        // onSelect=""
        /*
          This must be a controlled component
        */
      />
    </form>
    <InterviewerList interviewers={props.interviewers} value={interviewer} setInterviewer={setInterviewer} />
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
