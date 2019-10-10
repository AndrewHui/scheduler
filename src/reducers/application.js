
  export const SET_DAY = "SET_DAY";
  export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  export const SET_INTERVIEW = "SET_INTERVIEW";
  export const SUBTRACT = "SUBTRACT";
  export const ADD = "ADD";

export default function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return {
        ...state, day: action.value 
        }
      case SET_APPLICATION_DATA:
        return { ...state, days: action.days, appointments: action.appointments, interviewers: action.interviewers}
      case SET_INTERVIEW: 

      let selectedDay;
      let index;

      for (let i = 0; i < state.days.length; i++) {
        if (state.day === state.days[i].name) {
          selectedDay = {...state.days[i]};
          index = i;
        }
      }

      if (action.updateDays === ADD) {
        selectedDay.spots++;
      } else {
        selectedDay.spots--;
      }

      const newDays = [...state.days];
      newDays[index] = selectedDay;

      return { ...state, appointments: action.value, days: newDays}
      
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
