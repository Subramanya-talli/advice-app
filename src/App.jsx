import React, { useState, useEffect } from "react";
import "./App.css";

const URL = "https://api.adviceslip.com/advice";

const App = () => {
  
  const [advices, setadvice] = useState("");


  const fetchAdvice = async () => {
    const response = await fetch(URL);
    const advices = await response.json();
    setadvice(advices.slip.advice);

  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advices}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
