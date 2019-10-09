

export default function reducer(props) {
  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";
  const SUBTRACT = "SUBTRACT";
  const ADD = "ADD";

  
  function reducer(state, action) {
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
}