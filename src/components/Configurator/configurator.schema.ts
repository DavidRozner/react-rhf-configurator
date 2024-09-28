import * as z from "zod";
import { ConfiguratorApiClient } from "@api";

const client = ConfiguratorApiClient.GetInstance();
const data = await client.getConfiguratorData();

export const configuratorSchema = z.object({
  design: z.number().refine(
    (value) => {
      return data.design.some((item) => item.id === value);
    },
    {
      message: "Design is not available at the moment!",
    },
  ),
});

export type ConfiguratorForm = z.infer<typeof configuratorSchema>;
