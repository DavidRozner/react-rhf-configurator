import { useConfiguratorApi } from "@api";
import { useForm } from "react-hook-form";
import { ConfiguratorForm, configuratorSchema } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";

export const useConfigurator = () => {
  const { data, loading } = useConfiguratorApi();
  const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
  const form = useForm<ConfiguratorForm>({
    defaultValues: savedData,
    resolver: zodResolver(configuratorSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return {
    data,
    loading,
    form,
    handleSubmit,
  };
};
