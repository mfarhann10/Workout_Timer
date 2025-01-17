import { useEffect, useMemo, useState } from "react";
import ToggleSounds from "./components/ToggleSounds";
import Calculator from "./components/Calculator";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(() => {
    return [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ];
  }, [partOfDay]);

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-white py-16 px-12 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-500 text-center mb-8">
        Workout Timer
      </h1>
      <time className="block w-72 text-center mx-auto mb-8 bg-gray-100 rounded-lg py-4 text-sm font-bold text-blue-500 uppercase">
        For your workout on {time}
      </time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default App;
