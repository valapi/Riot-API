import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";
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
declare class AccountV1 {
    private RequestClient;
    private Region;
    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     * Get account by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByPuuid(puuid: string): Promise<ValorantApiRequestResponse<AccountDto>>;
    /**
     * Get account by riot id
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByRiotId(gameName: string, tagLine: string): Promise<ValorantApiRequestResponse<AccountDto>>;
    /**
     * Get active shard for a player
     * @param {string} puuid Player UUID
     * @param {string} game Game (default: val)
     * @returns {Promise<ValorantApiRequestResponse<ActiveShardDto>>}
     */
    ActiveShardsByGameAndPuuid(puuid: string, game?: 'val' | 'lor'): Promise<ValorantApiRequestResponse<ActiveShardDto>>;
    /**
     * Get account by access token
     * * Not For Public Use
     * @param {string} authorization (Header Parameters)
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByAccessToken(authorization: string): Promise<ValorantApiRequestResponse<AccountDto>>;
}
export { AccountV1 };
export type { AccountDto, ActiveShardDto };
