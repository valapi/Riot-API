import { AxiosClient, type RiotAPIAxios } from "../client/AxiosClient";
import type { ValorantAPIRegion } from "@valapi/lib";
declare type AccountV1_ByGame_Game = 'val' | 'lor';
declare class AccountV1 {
    private apiKey;
    private region;
    private AxiosClient;
    /**
     *
     * @param AxiosClient Axios Client
     * @param apiKey API Key
     * @param Region Region Service
     */
    constructor(AxiosClient: AxiosClient, apiKey: string, Region: ValorantAPIRegion);
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<RiotAPIAxios>}
     */
    ByRiotId(gameName: string, tagLine: string): Promise<RiotAPIAxios<any>>;
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<RiotAPIAxios>}
     */
    ByPuuid(puuid: string): Promise<RiotAPIAxios<any>>;
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<RiotAPIAxios>}
     */
    ByGame(puuid: string, game?: AccountV1_ByGame_Game): Promise<RiotAPIAxios<any>>;
}
export { AccountV1, type AccountV1_ByGame_Game };
//# sourceMappingURL=AccountV1.d.ts.map