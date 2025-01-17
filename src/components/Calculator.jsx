/* eslint-disable react/prop-types */
import { useState } from "react";
import clickSound from "../ClickSound.m4a";

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  const playSound = function () {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  };

  return (
    <>
      <form className="flex flex-col gap-6 mb-8">
        <div className="flex items-center gap-6">
          <label className="font-medium text-2xl w-48">Type of workout</label>
          <select
            value={number}
            onChange={(e) => setNumber(+e.target.value)}
            className="text-lg px-2 py-1 border border-gray-300 rounded-md"
          >
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-6">
          <label className="font-medium text-2xl w-48">How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="w-48"
          />
          <span className="text-lg">{sets}</span>
        </div>
        <div className="flex items-center gap-6">
          <label className="font-medium text-2xl w-48">How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-48"
          />
          <span className="text-lg">{speed} sec/exercise</span>
        </div>
        <div className="flex items-center gap-6">
          <label className="font-medium text-2xl w-48">Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
            className="w-48"
          />
          <span className="text-lg">{durationBreak} minutes/break</span>
        </div>
      </form>
      <section className="flex items-center justify-center gap-6 bg-gray-100 rounded-lg p-6">
        <button
          className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-xl hover:bg-blue-500"
          onClick={() => {}}
        >
          –
        </button>
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-500">
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button
          className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-xl hover:bg-blue-500"
          onClick={() => {}}
        >
          +
        </button>
      </section>
    </>
  );
}

export default Calculator;
