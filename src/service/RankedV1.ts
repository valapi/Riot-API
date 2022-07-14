//import

import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, QueueId } from "@valapi/lib";

//interface

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

//class

class RankedV1 {
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
     * @param {String} actId Act ID
     * @param {Number} size Size (default: 200)
     * @param {Number} startIndex Start Index (default: 0)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    public async LeaderboardsByAct(actId: string, size: number = 200, startIndex: number = 0): Promise<ValorantApiRequestResponse<RiotAPIServiceRanked>> {
        return await this.RequestClient.get(this.region.riot.server + `/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
    }
}

//export

export { RankedV1 };