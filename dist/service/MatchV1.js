"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchV1 = void 0;
const tslib_1 = require("tslib");
//interface
//i did know yet!
//class
/**
 * * Not For Public Use
 */
class MatchV1 {
    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    constructor(RequestClient, Region) {
        this.region = Region;
        this.RequestClient = RequestClient;
    }
    /**
     *
     * @param {String} matchId Match ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByMatchId(matchId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/matches/${matchId}`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ListByPuuid(puuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/matchlists/by-puuid/${puuid}`);
        });
    }
    /**
     *
     * @param {String} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    RecentByQueue(queueId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/recent-matches/by-queue/${queueId}`);
        });
    }
}
exports.MatchV1 = MatchV1;
//# sourceMappingURL=MatchV1.js.map