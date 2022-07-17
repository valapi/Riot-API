import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";
interface PlayerDto {
    /**
     * This field may be omitted if the player has been anonymized.
     */
    puuid?: string;
    /**
     * This field may be omitted if the player has been anonymized.
     */
    gameName?: string;
    /**
     * This field may be omitted if the player has been anonymized.
     */
    tagLine?: string;
    leaderboardRank: number;
    rankedRating: number;
    numberOfWins: number;
    [key: string]: any;
}
interface LeaderboardDto {
    /**
     * The shard for the given leaderboard.
     */
    shard: string;
    /**
     * The act id for the given leaderboard. Act ids can be found using the val-content API.
     */
    actId: string;
    /**
     * The total number of players in the leaderboard.
     */
    totalPlayers: number;
    players: Array<PlayerDto>;
    [key: string]: any;
}
declare class RankedV1 {
    private RequestClient;
    private Region;
    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     * Get leaderboard for the competitive queue
     * @param {string} actId Act ID
     * @param {number} size Size (default: 200)
     * @param {number} startIndex Start Index (default: 0)
     * @returns {Promise<ValorantApiRequestResponse<LeaderboardDto>>}
     */
    LeaderboardsByAct(actId: string, size?: number, startIndex?: number): Promise<ValorantApiRequestResponse<LeaderboardDto>>;
}
export { RankedV1 };
export type { PlayerDto, LeaderboardDto };
