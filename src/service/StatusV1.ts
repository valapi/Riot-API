//import
import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";

import type { ValorantAPIRegion } from "@valapi/lib";

//class

class StatusV1 {
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
     * @returns {Promise<RiotAPIAxios>}
     */
     public async PlatformData():Promise<RiotAPIAxios<any>> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
    }
}

//export
export { StatusV1 };