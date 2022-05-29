import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";
interface RiotAPIServiceAccount {
    puuid: string;
    gameName: string;
    tagLine: string;
    [key: string]: any;
}
declare type RiotAPIServiceAccountGameList = 'val' | 'lor';
declare class AccountV1 {
    private region;
    private RequestClient;
    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    constructor(RequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByPuuid(puuid: string): Promise<ValorantApiRequestResponse<RiotAPIServiceAccount>>;
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByRiotId(gameName: string, tagLine: string): Promise<ValorantApiRequestResponse<RiotAPIServiceAccount>>;
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ActiveShardsByGameAndPuuid(puuid: string, game?: RiotAPIServiceAccountGameList): Promise<ValorantApiRequestResponse<any>>;
}
export { AccountV1 };
export type { RiotAPIServiceAccount, RiotAPIServiceAccountGameList };
//# sourceMappingURL=AccountV1.d.ts.map