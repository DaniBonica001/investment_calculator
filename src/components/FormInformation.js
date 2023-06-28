import { useForm } from "react-hook-form";
import styles from "./FormInformation.module.css"

function FormInformation() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      currentSavings: 0,
      yearlySavings: 0,
      expectedReturn: 0,
      duration: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              {...register("currentSavings")}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              {...register("yearlySavings")}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              {...register("expectedReturn")}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input {...register("duration")} type="number" id="duration" />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className= {styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default FormInformation;
