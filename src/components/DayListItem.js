import React from "react";

import "./DayListItem.scss";

// var classnames = require('classnames');

import classnames from "classnames";

export default function DayListItem({ name, spots, selected, setDay }) {

  const dayListItemClass = classnames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const formatSpots = ({spots}) => 
  {
    if (spots === 0) {
      return `no spots remaining`;
    } else if (spots === 1) {
      return `${spots} spots remaining`;
    } else {
      return `${spots} spots remaining`;
    
  } }

  return (
    <li className = {dayListItemClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots({spots})}</h3>
    </li>
  );
}

// setDay(name)