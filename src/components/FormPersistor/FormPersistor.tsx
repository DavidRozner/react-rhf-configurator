import { useWatch } from "react-hook-form";
import { useEffect } from "react";

export const FormPersist = () => {
  const formValues = useWatch();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);

  return <></>;
};
