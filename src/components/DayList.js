import React from "react";
import DayListItem from "./DayListItem"


export default function DayList(props) { // { setDay... }


  const days = props.days.map(day => 
    <DayListItem 
      key={day.id}
      name={day.name}
      spots={day.spots}
      setDay={props.setDay}
    />
  );

  return <ul>{days}</ul>;
}

