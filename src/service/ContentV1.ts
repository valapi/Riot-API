//import

import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, Locale as _Locale } from "@valapi/lib";

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
    private region:ValorantApiRegion;
    private RequestClient:ValRequestClient;

    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    constructor(RequestClient:ValRequestClient, Region:ValorantApiRegion) {
        this.region = Region;
        this.RequestClient = RequestClient;
    }

    /**
     * 
     * @param {String} locale Locale (default: en-US)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
     public async Contents(locale:keyof typeof _Locale.from = 'en-US'):Promise<ValorantApiRequestResponse<RiotAPIServiceContent>> {
        return await this.RequestClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${locale}`);
    }
}

//export

export { ContentV1 };
export type { RiotAPIServiceContent, RiotAPIServiceContentItem, RiotAPIServiceContentAct };