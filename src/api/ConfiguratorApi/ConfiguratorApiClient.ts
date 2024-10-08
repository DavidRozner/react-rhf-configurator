import { IConfiguration } from "./IConfiguration.ts";

export class ConfiguratorApiClient {
  private static instance: ConfiguratorApiClient;

  private cache: IConfiguration | null = null;

  private constructor() {}

  public static GetInstance(): ConfiguratorApiClient {
    if (!ConfiguratorApiClient.instance) {
      ConfiguratorApiClient.instance = new ConfiguratorApiClient();
    }
    return ConfiguratorApiClient.instance;
  }

  public async getConfiguratorData(): Promise<IConfiguration> {
    if (this.cache) {
      return this.cache;
    }

    const res = await fetch("/mock.json");
    const data = await res.json();
    this.cache = data;

    return data;
  }
}
