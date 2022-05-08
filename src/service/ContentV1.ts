//import

import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";

import { type ValorantAPIRegion, Locale as _Locale } from "@valapi/lib";

//interface

interface RiotAPIServiceContentAct {
    name: string;
    localizedNames?: string;
    id: string;
    isActive: boolean;

    [key:string]: any;
}

interface RiotAPIServiceContentItem {
    name: string;
    localizedNames? : string;
    id: string;
    assetName: string;
    assetPath?: string;

    [key:string]: any;
}

interface RiotAPIServiceContent {
    version: string;
    characters: Array<RiotAPIServiceContentItem>;
    maps: Array<RiotAPIServiceContentItem>;
    chromas: Array<RiotAPIServiceContentItem>;
    skins: Array<RiotAPIServiceContentItem>;
    skinLevels: Array<RiotAPIServiceContentItem>;
    equips: Array<RiotAPIServiceContentItem>;
    gameModes: Array<RiotAPIServiceContentItem>;
    sprays: Array<RiotAPIServiceContentItem>;
    sprayLevels: Array<RiotAPIServiceContentItem>;
    charms: Array<RiotAPIServiceContentItem>;
    charmLevels: Array<RiotAPIServiceContentItem>;
    playerCards: Array<RiotAPIServiceContentItem>;
    playerTitles: Array<RiotAPIServiceContentItem>;
    acts: Array<RiotAPIServiceContentAct>;

    [key:string]: any;
}

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
     public async Contents(locale:keyof typeof _Locale.data = 'English_United_States'):Promise<RiotAPIAxios<RiotAPIServiceContent>> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${_Locale.data[locale]}` + `&api_key=${this.apiKey}`);
    }
}

//export

export { ContentV1 };
export type { RiotAPIServiceContent, RiotAPIServiceContentItem, RiotAPIServiceContentAct };