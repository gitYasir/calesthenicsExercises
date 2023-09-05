import Exercises from "@/components/Exercises";
import data from "../data/data";
import styles from "@/styles/Exercises.module.css";

function intermediate() {
  const warmUpExercises = data["Intermediate"]["Exercises"];

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

export default intermediate;
