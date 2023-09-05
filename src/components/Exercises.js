import styles from "@/styles/Home.module.css";
import ExerciseCard from "./ExerciseCard";

function Exercises({ exercise }) {
  return (
    <div>
      <ExerciseCard
        title={exercise.Exercise}
        description={exercise.Description}
        reps={exercise["Reps/Duration"]}
        link={exercise.Link}
      />
    </div>
  );
}

export default Exercises;
