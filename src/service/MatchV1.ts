//import

import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, QueueId } from "@valapi/lib";

//interface

//too hard.

//service

/**
 * * Not For Public Use
 */
class MatchV1 {
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
     * Get match by id
     * @param {string} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    public async ByMatchId(matchId: string): Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/match/v1/matches/${matchId}`);
    }

    /**
     * Get matchlist for games played by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    public async ListByPuuid(puuid: string): Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/match/v1/matchlists/by-puuid/${puuid}`);
    }

    /**
     * Get recent matches
     * @param {string} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    public async RecentByQueue(queueId: keyof typeof QueueId.from): Promise<ValorantApiRequestResponse<any>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/match/v1/recent-matches/by-queue/${queueId}`);
    }
}

//export

export { MatchV1 };