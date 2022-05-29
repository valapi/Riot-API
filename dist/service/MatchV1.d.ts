import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, QueueId } from "@valapi/lib";
/**
 * * Not For Public Use
 */
declare class MatchV1 {
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
     * @param {String} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByMatchId(matchId: string): Promise<ValorantApiRequestResponse<any>>;
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ListByPuuid(puuid: string): Promise<ValorantApiRequestResponse<any>>;
    /**
     *
     * @param {String} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    RecentByQueue(queueId: keyof typeof QueueId.from): Promise<ValorantApiRequestResponse<any>>;
}
export { MatchV1 };
//# sourceMappingURL=MatchV1.d.ts.map