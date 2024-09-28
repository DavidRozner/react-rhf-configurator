import styles from "./configurator.module.scss";
import { FormProvider } from "react-hook-form";
import { DesignField, FormPersist } from "@components";
import { Footer } from "../Footer";
import { useConfigurator } from "./useConfigurator.ts";

export const Configurator = () => {
  const { loading, form, handleSubmit } = useConfigurator();

  if (loading) return null;
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <FormPersist />
        <div className={styles.root}>
          <div className={styles.preview}>
            <img
              src={
                "https://live.staticflickr.com/7212/7374274704_1517271226_w.jpg"
              }
              alt={"Preview"}
            />
          </div>
          <div className={styles.header}></div>
          <div className={styles.aside}>
            <DesignField name={"design"} />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
