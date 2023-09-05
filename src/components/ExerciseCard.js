import styles from "@/styles/Home.module.css";
import css from "@/styles/Exercises.module.css";

function ExerciseCard({ title, description, reps, link }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h4>
        Reps/Duration: <h5>{reps}</h5>
      </h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h4 className={css.demo}>Demonstration</h4>
      </a>
    </div>
  );
}

export default ExerciseCard;
