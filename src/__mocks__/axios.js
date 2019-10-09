
// [{"id":1,"name":"Monday","appointments":[1,2,3,4,5],"interviewers":[2,4,6,7,9],"spots":0},
// {"id":2,"name":"Tuesday","appointments":[6,7,8,9,10],"interviewers":[3,4,7,9,10],"spots":3},
// {"id":3,"name":"Wednesday","appointments":[11,12,13,14,15],"interviewers":[5,6,7,8,10],"spots":5},


// {"id":4,"name":"Thursday","appointments":[16,17,18,19,20],"interviewers":[1,3,6,9,10],"spots":3},{"id":5,"name":"Friday","appointments":[21,22,23,24,25],"interviewers":[3,5,6,8,10],"spots":3}]


const fixtures = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2],
      interviewers: [1, 2],
      spots: 1
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [3, 4],
      interviewers: [3, 4],
      spots: 1
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": {
      id: 2,
      time: "1pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Leopold Silvers", interviewer: 4 }
    },
    "4": { id: 4, time: "3pm", interview: null }
  },
  interviewers: {
    "1": {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg"
    }
  }
};


export default {
  defaults: { baseURL: "" },
  get: jest.fn(url => {
    if (url === "http://localhost:8001/api/days") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.days
      });
    }

    if (url === "http://localhost:8001/api/appointments") {
      /* Resolve appointments data */
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.appointments
      });
    }

    if (url === "http://localhost:8001/api/interviewers") {
      /* Resolve interviewers data */
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.interviewers
      });
    }
  }),
  put: jest.fn(url => {
    console.log(url)
    if (url.startsWith("/api/appointments")) {
      return Promise.resolve({
        status: 200,
        statusText: "OK"
      });
    }
  }),
  delete: jest.fn(url => {
    console.log(url)
    if (url.startsWith("/api/appointments")) {
      return Promise.resolve({
        status: 200,
        statusText: "OK"
      });
    }
  })
};