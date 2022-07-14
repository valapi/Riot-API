//import

import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";

//interface

interface RiotAPIServiceAccount {
    puuid: string;
    gameName: string;
    tagLine: string;

    [key: string]: any;
}

type RiotAPIServiceAccountGameList = 'val' | 'lor';

//class

class AccountV1 {
    private region: ValorantApiRegion;
    private RequestClient: ValRequestClient;

    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    public constructor(RequestClient: ValRequestClient, Region: ValorantApiRegion) {
        this.region = Region;
        this.RequestClient = RequestClient;
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    public async ByPuuid(puuid: string): Promise<ValorantApiRequestResponse<RiotAPIServiceAccount>> {
        return await this.RequestClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}`);
    }

    /**
     * 
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    public async ByRiotId(gameName: string, tagLine: string): Promise<ValorantApiRequestResponse<RiotAPIServiceAccount>> {
        return await this.RequestClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @param {String} game Game (default: val)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    public async ActiveShardsByGameAndPuuid(puuid: string, game: RiotAPIServiceAccountGameList = 'val'): Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
    }
}

//export

export { AccountV1 };
export type { RiotAPIServiceAccount, RiotAPIServiceAccountGameList };