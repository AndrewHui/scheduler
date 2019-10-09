


export function getAppointmentsForDay(state, selectedDay) {
  let result = [];
 
  const foundDay = state.days.find(day => {
    return day.name === selectedDay;
  })

  if (!foundDay) {
    return result;
  }

  for (let i of foundDay.appointments) {
    if (state.appointments[i]) {
      result.push(state.appointments[i])
    }
  }

  return result
}

export function getInterviewersForDay(state, day) {
  let currentDay = null;
  const interviewers =[];
  let currentDayInterviews


  state.days.map(day2 => {
    if (day2.name === day) {
      currentDay = day
      currentDayInterviews = day2.interviewers || []
    }
  }) 
  if (currentDay === null) {
    return [];
  }
  else {
    for (let i of currentDayInterviews) {
      interviewers.push(state.interviewers[i])
    } 
    return interviewers 

  }

  
  
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