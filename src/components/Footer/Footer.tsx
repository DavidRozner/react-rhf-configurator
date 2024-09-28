import { useFooter } from "./useFooter.ts";
import { useFormContext } from "react-hook-form";
import styles from "./footer.module.scss";

export const Footer = () => {
  const { calculatedPrice, calculatedWeight } = useFooter();
  const form = useFormContext();
  return (
    <div className={styles.root}>
      <div>
        <h2>Price: {calculatedPrice}</h2>
        <h2>Weight: {calculatedWeight}</h2>
        <button>Submit</button>
      </div>
      <div>
        <h2>Form errors</h2>
        <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      </div>
    </div>
  );
};
