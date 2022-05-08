//import
import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";

import type { ValorantAPIRegion } from "@valapi/lib";

//class

type AccountV1_ByGame_Game = 'val' | 'lor';

class AccountV1 {
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
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<RiotAPIAxios>}
     */
     public async ByRiotId(gameName:string, tagLine:string):Promise<RiotAPIAxios<any>> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @returns {Promise<RiotAPIAxios>}
     */
     public async ByPuuid(puuid:string):Promise<RiotAPIAxios<any>> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<RiotAPIAxios>}
     */
     public async ByGame(puuid:string, game:AccountV1_ByGame_Game = 'val'):Promise<RiotAPIAxios<any>> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }
}

//export
export { AccountV1, type AccountV1_ByGame_Game };