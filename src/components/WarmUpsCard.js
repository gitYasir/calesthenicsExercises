import styles from "@/styles/Home.module.css";
import css from "@/styles/Exercises.module.css";

function WarmUpsCard({ exercise }) {
  return (
    <div className={styles.card}>
      <h2>{exercise.Exercise}</h2>
      <h4>
        Sets: {exercise.Sets} Reps: {exercise.Reps}
      </h4>
      {/* <h4></h4> */}
      <p>{exercise.Description}</p>
      <a href={exercise.Link} target="_blank" rel="noopener noreferrer">
        <h4 className={css.demo}>Demonstration</h4>
      </a>
    </div>
  );
}

export default WarmUpsCard;
