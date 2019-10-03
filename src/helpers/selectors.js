


export function getAppointmentsForDay(state, day) {
  let days1 = [];
  let result =[];
  

  state.days.map(days2 => {
    if (days2.name === day) {
      days1 = days2.appointments
    }
  })


  for (let i of days1) {
    result.push(state.appointments[i])
  }

  return result
}

export function getInterview(state, interview) {
  if (interview) {
    let result = {};
    result.student = interview.student
    result.interviewer = state.interviewers[interview.interviewer]
    
    return result

  }

  return null;


}