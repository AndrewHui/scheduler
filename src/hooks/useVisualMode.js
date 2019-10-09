import {useState} from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(nextMode, replace) { 
    if (replace === true) {
      setMode(nextMode)
    }
    else {
      setHistory([...history, mode])
      setMode(nextMode)
    }
  }
  function back() {
    if (history.length <= 2) {
      setMode(history[history.length-1])
    }
    else {
    setMode(history[history.length-1])
    setHistory(history.slice(0, -1))
    }
  }

  return { mode, transition, back };
}

  // function useCustomHook() {
  //   function action() {}
  
  //   return { action };
  // }