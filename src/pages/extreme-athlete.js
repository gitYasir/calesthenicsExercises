import Exercises from "@/components/Exercises";
import data from "../data/data";
import styles from "@/styles/Exercises.module.css";

function extremeAthlete() {
  const warmUpExercises = data["Extreme Athlete"]["Exercises"];

  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {warmUpExercises.map((exercise) => (
          <Exercises exercise={exercise} key={exercise.Exercise} />
        ))}
      </div>
    </div>
  );
}

export default extremeAthlete;
