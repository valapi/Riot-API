//import

import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";

import type { ValorantAPIRegion } from "@valapi/lib";

//interface

interface RiotAPIServiceStatusContent {
    locale: string;
    content: string;

    [key:string]: any;
}

interface RiotAPIServiceStatusUpdate {
    id: number;
    author: string;
    publish_locations: Array<string>;
    translations: Array<RiotAPIServiceStatusContent>;
    created_at: string;
    updated_at: string;

    [key:string]: any;
}

interface RiotAPIServiceStatusStatus {
    id: number;
    maintenance_status: string;
    incident_severity: string;
    titles: Array<RiotAPIServiceStatusContent>;
    updates: Array<RiotAPIServiceStatusUpdate>;
    created_at: string;
    archive_at: string;
    updated_at: string;
    platforms: Array<string>;

    [key:string]: any;
}

interface RiotAPIServiceStatusPlatform {
    id: string;
    name: string;
    locales: Array<string>;
    maintenances: Array<RiotAPIServiceStatusStatus>;
    incidents: Array<RiotAPIServiceStatusStatus>;

    [key:string]: any;
}

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
     public async PlatformData():Promise<RiotAPIAxios<RiotAPIServiceStatusPlatform>> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
    }
}

//export

export { StatusV1 };
export type { RiotAPIServiceStatusContent, RiotAPIServiceStatusPlatform, RiotAPIServiceStatusStatus, RiotAPIServiceStatusUpdate };