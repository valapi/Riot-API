import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, QueueId } from "@valapi/lib";
/**
 * * Not For Public Use
 */
declare class MatchV1 {
    private RequestClient;
    private Region;
    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     * Get match by id
     * @param {string} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    ByMatchId(matchId: string): Promise<ValorantApiRequestResponse<any>>;
    /**
     * Get matchlist for games played by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    ListByPuuid(puuid: string): Promise<ValorantApiRequestResponse<any>>;
    /**
     * Get recent matches
     * @param {string} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    RecentByQueue(queueId: keyof typeof QueueId.from): Promise<ValorantApiRequestResponse<any>>;
}
export { MatchV1 };
