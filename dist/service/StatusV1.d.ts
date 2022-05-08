import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";
import type { ValorantAPIRegion } from "@valapi/lib";
declare class StatusV1 {
    private apiKey;
    private region;
    private AxiosClient;
    /**
     *
     * @param AxiosClient Axios Client
     * @param apiKey API Key
     * @param Region Region Service
     */
    constructor(AxiosClient: AxiosClient, apiKey: string, Region: ValorantAPIRegion);
    /**
     * @returns {Promise<RiotAPIAxios>}
     */
    PlatformData(): Promise<RiotAPIAxios<any>>;
}
export { StatusV1 };
//# sourceMappingURL=StatusV1.d.ts.map