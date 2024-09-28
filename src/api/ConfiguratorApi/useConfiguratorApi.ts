import {useEffect, useState} from "react";
import {IConfiguration} from "./IConfiguration.ts";
import {ConfiguratorApiClient} from "./ConfiguratorApiClient.ts";

export const useConfiguratorApi = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IConfiguration | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = ConfiguratorApiClient.GetInstance();
                const result = await client.getConfiguratorData();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        void fetchData();
    }, []);

    return {
        loading,
        data,
        error
    };
};