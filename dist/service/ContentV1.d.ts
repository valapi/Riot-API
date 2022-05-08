import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";
import { type ValorantAPIRegion, Locale as _Locale } from "@valapi/lib";
declare class ContentV1 {
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
     *
     * @param {String} locale Locale
     * @returns {Promise<RiotAPIAxios>}
     */
    Contents(locale?: keyof typeof _Locale.data): Promise<RiotAPIAxios<any>>;
}
export { ContentV1 };
//# sourceMappingURL=ContentV1.d.ts.map