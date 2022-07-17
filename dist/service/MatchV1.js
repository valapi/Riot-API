"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchV1 = void 0;
const tslib_1 = require("tslib");
//interface
//too hard.
//service
/**
 * * Not For Public Use
 */
class MatchV1 {
    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    constructor(ValRequestClient, Region) {
        this.RequestClient = ValRequestClient;
        this.Region = Region;
    }
    /**
     * Get match by id
     * @param {string} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    ByMatchId(matchId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/match/v1/matches/${matchId}`);
        });
    }
    /**
     * Get matchlist for games played by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    ListByPuuid(puuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/match/v1/matchlists/by-puuid/${puuid}`);
        });
    }
    /**
     * Get recent matches
     * @param {string} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse<any>>}
     */
    RecentByQueue(queueId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/match/v1/recent-matches/by-queue/${queueId}`);
        });
    }
}
exports.MatchV1 = MatchV1;
