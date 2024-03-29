import Exercises from "@/components/Exercises";
import data from "../data/data";
import styles from "@/styles/Exercises.module.css";
import WarmUpsCard from "@/components/WarmUpsCard";

function warmUps() {
  const warmUpExercises = data["Warm-Up"]["Exercises"];

  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {warmUpExercises.map((exercise) => (
          <WarmUpsCard exercise={exercise} key={exercise.Exercise} />
        ))}
      </div>
    </div>
  );
}

export default warmUps;
