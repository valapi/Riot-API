"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankedV1 = void 0;
const tslib_1 = require("tslib");
//class
class RankedV1 {
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
     * @param {String} actId Act ID
     * @param {Number} size Size (default: 200)
     * @param {Number} startIndex Start Index (default: 0)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    LeaderboardsByAct(actId, size = 200, startIndex = 0) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
        });
    }
}
exports.RankedV1 = RankedV1;
