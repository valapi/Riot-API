//import

import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, QueueId } from "@valapi/lib";

//interface

//i did know yet!

//class

/**
 * * Not For Public Use
 */
class MatchV1 {
    private region:ValorantApiRegion;
    private RequestClient:ValRequestClient;

    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    constructor(RequestClient:ValRequestClient, Region:ValorantApiRegion) {
        this.region = Region;
        this.RequestClient = RequestClient;
    }

    /**
     * 
     * @param {String} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
     public async ByMatchId(matchId: string):Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.region.riot.server + `/val/match/v1/matches/${matchId}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
     public async ListByPuuid(puuid: string):Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.region.riot.server + `/val/match/v1/matchlists/by-puuid/${puuid}`);
    }

    /**
     * 
     * @param {String} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
     public async RecentByQueue(queueId: keyof typeof QueueId.from):Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.region.riot.server + `/val/match/v1/recent-matches/by-queue/${queueId}`);
    }
}

//export

export { MatchV1 };