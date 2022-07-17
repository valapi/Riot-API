//import

import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";

//interface

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

//service

class RankedV1 {
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
     * Get leaderboard for the competitive queue
     * @param {string} actId Act ID
     * @param {number} size Size (default: 200)
     * @param {number} startIndex Start Index (default: 0)
     * @returns {Promise<ValorantApiRequestResponse<LeaderboardDto>>}
     */
    public async LeaderboardsByAct(actId: string, size: number = 200, startIndex: number = 0): Promise<ValorantApiRequestResponse<LeaderboardDto>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
    }
}

//export

export { RankedV1 };
export type { PlayerDto, LeaderboardDto };