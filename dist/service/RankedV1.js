"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankedV1 = void 0;
const tslib_1 = require("tslib");
//service
class RankedV1 {
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
     * Get leaderboard for the competitive queue
     * @param {string} actId Act ID
     * @param {number} size Size (default: 200)
     * @param {number} startIndex Start Index (default: 0)
     * @returns {Promise<ValorantApiRequestResponse<LeaderboardDto>>}
     */
    LeaderboardsByAct(actId, size = 200, startIndex = 0) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
        });
    }
}
exports.RankedV1 = RankedV1;
