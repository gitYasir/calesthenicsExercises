import styles from "@/styles/Home.module.css";

function Card({ title, description, link }) {
  return (
    <a href={link} className={styles.card}>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
}

export default Card;
