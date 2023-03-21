import type { NextPage } from "next";
import styles from "./form.module.css";

const Form: NextPage = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formText}>
        <div className={styles.peopleHaveSigned}>
          140,000 people have signed up
        </div>
        <div className={styles.fillInYour}>
          Fill in your details to join the party!
        </div>
      </div>
      <div className={styles.formFields}>
        <input className={styles.input} type="text" placeholder="Your name" />
        <input
          className={styles.input}
          type="text"
          placeholder="Email address"
        />
      </div>
      <button className={styles.button}>
        <div className={styles.unstyledbutton}>
          <div className={styles.button1}>Subscribe</div>
        </div>
      </button>
    </div>
  );
};

export default Form;
