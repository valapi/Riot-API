//import
import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";

import { type ValorantAPIRegion, Locale as _Locale } from "@valapi/lib";

//class

class ContentV1 {
    private apiKey:string;
    private region:ValorantAPIRegion;
    private AxiosClient:AxiosClient;

    /**
     * 
     * @param AxiosClient Axios Client
     * @param apiKey API Key
     * @param Region Region Service
     */
    constructor(AxiosClient:AxiosClient, apiKey:string, Region:ValorantAPIRegion) {
        this.apiKey = apiKey;
        this.region = Region;

        this.AxiosClient = AxiosClient;
    }

    /**
     * 
     * @param {String} locale Locale
     * @returns {Promise<RiotAPIAxios>}
     */
     public async Contents(locale:keyof typeof _Locale.data = 'English_United_States'):Promise<RiotAPIAxios<any>> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${_Locale.data[locale]}` + `&api_key=${this.apiKey}`);
    }
}

//export
export { ContentV1 };