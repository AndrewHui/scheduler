import React from "react";
import "./InterviewerListItem.scss";
const classnames = require('classnames');




export default function InterviewerListItem(props) { 
  const InterviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })

  return (
   <li className={InterviewerListItemClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    id= {props.id}
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li> 
  )

}

