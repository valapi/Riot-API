import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse } from "@valapi/lib";
interface RiotAPIServiceRankedPlayer {
    puuid: string;
    gameName: string;
    tagLine: string;
    leaderboardRank: number;
    rankedRating: number;
    numberOfWins: number;
    [key: string]: any;
}
interface RiotAPIServiceRanked {
    shard: string;
    actId: string;
    totalPlayers: number;
    players: Array<RiotAPIServiceRankedPlayer>;
    [key: string]: any;
}
declare class RankedV1 {
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
     * @param {String} actId Act ID
     * @param {Number} size Size
     * @param {Number} startIndex Start Index
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    LeaderboardsByAct(actId: string, size?: number, startIndex?: number): Promise<ValorantApiRequestResponse<RiotAPIServiceRanked>>;
}
export { RankedV1 };
//# sourceMappingURL=RankedV1.d.ts.map