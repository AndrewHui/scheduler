import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem"
import PropTypes from 'prop-types';
const classnames = require('classnames');



InterviewerList.propTypes = {
  interviewer: PropTypes.number,
  setInterviewer: PropTypes.func.isRequired
};


export default function InterviewerList(props) { 

 

  const iterateInterviewers = (props.interviewers.map(interviewer => {
    console.log("~~~~~~~~~~~~~~", props.interviewer)
  return (
    <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.interviewer}  
    setInterviewer={event => props.setInterviewer(interviewer.id)}
    />
    )
  }))

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{iterateInterviewers}</ul>
    </section>
    )

}










