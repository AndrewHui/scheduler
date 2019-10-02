// We can use import Appointment from "components/Appointment"; to import a component from the src/components/Appoinment/index.js module. It is an alternative to import Appointment from "components/Appointment/Appointment";.


import React from "react";
import "components/Appointment/styles.scss";
import classnames from "classnames";
import header from "./header"

export default function Appointment(props) {

  return <article className="appointment"></article>
}