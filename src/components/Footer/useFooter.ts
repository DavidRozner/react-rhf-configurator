import { useFormContext, useWatch } from "react-hook-form";
import { useConfiguratorApi } from "@api";
import { Formatter } from "@helpers";

const BASE_PRICE = 100000;
const BASE_WEIGHT = 10000;

export const useFooter = () => {
  const { control } = useFormContext();
  const { data } = useConfiguratorApi();
  const design = useWatch({ control, name: "design" });
  const designItem = data?.design?.find((item) => item.id === design);

  const designPrice = designItem?.priceModifier || 0;
  const designWeight = designItem?.weightModifier || 0;

  const calculatedPrice = Formatter.FormatPrice(BASE_PRICE + designPrice);
  const calculatedWeight = Formatter.FormatWeight(BASE_WEIGHT + designWeight);

  return {
    calculatedPrice,
    calculatedWeight,
  };
};
