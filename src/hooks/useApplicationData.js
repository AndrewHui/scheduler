import axios from 'axios'
import React, { useReducer, useState, useEffect } from "react";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";



  export default function useApplicationData(props) {

    const SET_DAY = "SET_DAY";
    const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
    const SET_INTERVIEW = "SET_INTERVIEW";
    const SUBTRACT = "SUBTRACT";
    const ADD = "ADD";

    const [state, dispatch] = useReducer(reducer, {
      day: "Monday",
      days: [],
      appointments: {},
      interviewers: {}
    });



    // const [state, setState] = useReducer({
    //   day: "Monday",
    //   days: [],
    //   appointments: {},
    //   interviewers: {}
    // });

    // function reducer(state, action) {
    //   switch (action.type) {
    //     case SET_DAY:
    //       return {
    //        ...state, day: action.value 
    //       }
    //     case SET_APPLICATION_DATA:
    //       return { ...state, days: action.days, appointments: action.appointments, interviewers: action.interviewers}
    //     case SET_INTERVIEW: 

    //     let selectedDay;
    //     let index;

    //     for (let i = 0; i < state.days.length; i++) {
    //       if (state.day === state.days[i].name) {
    //         selectedDay = {...state.days[i]};
    //         index = i;
    //       }
    //     }

    //     if (action.updateDays === ADD) {
    //       selectedDay.spots++;
    //     } else {
    //       selectedDay.spots--;
    //     }

    //     const newDays = [...state.days];
    //     newDays[index] = selectedDay;

    //     return { ...state, appointments: action.value, days: newDays}
        
    //     default:
    //       throw new Error(
    //         `Tried to reduce with unsupported action type: ${action.type}`
    //       );
    //   }
    // }
  
    const setDay = day => dispatch({ type: SET_DAY, value: day});
    // const setDays = days => setState(prev => ({ ...prev, days }));
  
  
    useEffect(()=> {
      Promise.all([
        Promise.resolve(axios.get(`http://localhost:8001/api/days`)),
        Promise.resolve(axios.get(`http://localhost:8001/api/appointments`)),
        Promise.resolve(axios.get(`http://localhost:8001/api/interviewers`))
      ])
      .then((all) => {
        const days = all[0].data
        const appointments = all[1].data
        const interviewers = all[2].data
        dispatch({ 
          type: SET_APPLICATION_DATA, days, appointments, interviewers
        })
      })
    }, [])
  
  
  
    
    function bookInterview(id, interview) {

      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
  
      return axios.put(`/api/appointments/${id}`, appointment)
        .then(() => dispatch({ type: SET_INTERVIEW, value: appointments, updateDays: SUBTRACT}));
    }  
  
    function cancelInterview(id) {
      // if (state.appointments[id]) 
      // state.appointments[id] = null;

      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
  
      return axios.delete(`/api/appointments/${id}`)
        .then(() => dispatch({ type: SET_INTERVIEW, value: appointments, updateDays: ADD}));
      
    }

    return {
      state,
      setDay,
      bookInterview,
      cancelInterview
    }


}