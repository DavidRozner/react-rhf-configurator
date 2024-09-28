import { Controller, useFormContext } from "react-hook-form";
import { DesignFieldProps } from "./DesignFieldProps.ts";
import { DesignMapper } from "@helpers";
import styles from "./designField.module.scss";
import { Formatter } from "@helpers";
import { useConfiguratorApi } from "@api";

export const DesignField = (props: DesignFieldProps) => {
  const { name } = props;
  const { data } = useConfiguratorApi();
  const { control } = useFormContext();
  const remappedDesigns = DesignMapper.MapDesignByCategory(data?.design || []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const isValueForbidden = data?.design?.every(
          (item) => item.id !== field.value,
        );
        return (
          <>
            {isValueForbidden && (
              <div className={styles.forbiddenItem}>Item is forbidden</div>
            )}
            {remappedDesigns.map((design) => (
              <div key={design.title}>
                <h2>{design.title}</h2>
                <ul>
                  {design.items.map((design) => (
                    <li
                      className={`${styles.root} ${field.value === design.id ? styles.active : ""}`}
                      key={design.id}
                      onClick={() => field.onChange(design.id)}
                    >
                      <h3>{design.title}</h3>
                      <p>{design.description}</p>
                      <p>{`${Formatter.FormatWeight(design.weightModifier)} / ${Formatter.FormatPrice(design.priceModifier)}`}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        );
      }}
    />
  );
};
