// TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  // TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, sethomeScore] = useState(0);
  const [awayScore, setawayScore] = useState(0);
  const [timer, setTimer] = useState(45);
  useEffect(() => {
    const clock = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearTimeout(clock);
      }
    }, 1000);
  }, [timer]);

  const reset = e => {
    sethomeScore(0);
    setawayScore(0);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => sethomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => sethomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setawayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setawayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
          <button className="awayButtons__fieldGoal" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
