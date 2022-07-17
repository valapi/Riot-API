//import

import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";

//interface

interface AccountDto {
    puuid: string;
    /**
     * This field may be excluded from the response if the account doesn't have a gameName.
     */
    gameName?: string;
    /**
     * This field may be excluded from the response if the account doesn't have a tagLine.
     */
    tagLine?: string;

    [key: string]: any;
}

interface ActiveShardDto {
    puuid: string;
    game: 'val' | 'lor';
    activeShard: string;
}

//service

class AccountV1 {
    private RequestClient: ValRequestClient;
    private Region: ValorantApiRegion;

    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    public constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion) {
        this.RequestClient = ValRequestClient;
        this.Region = Region;
    }

    /**
     * Get account by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    public async ByPuuid(puuid: string): Promise<ValorantApiRequestResponse<AccountDto>> {
        return await this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}`);
    }

    /**
     * Get account by riot id
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    public async ByRiotId(gameName: string, tagLine: string): Promise<ValorantApiRequestResponse<AccountDto>> {
        return await this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }

    /**
     * Get active shard for a player
     * @param {string} puuid Player UUID
     * @param {string} game Game (default: val)
     * @returns {Promise<ValorantApiRequestResponse<ActiveShardDto>>}
     */
    public async ActiveShardsByGameAndPuuid(puuid: string, game: 'val' | 'lor' = 'val'): Promise<ValorantApiRequestResponse<ActiveShardDto>> {
        return await this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
    }

    /**
     * Get account by access token
     * * Not For Public Use
     * @param {string} authorization (Header Parameters)
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    public async ByAccessToken(authorization: string): Promise<ValorantApiRequestResponse<AccountDto>> {
        return await this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/me`, {
            headers: {
                'Authorization': `${authorization}`
            }
        });
    }
}

//export

export { AccountV1 };
export type { AccountDto, ActiveShardDto };