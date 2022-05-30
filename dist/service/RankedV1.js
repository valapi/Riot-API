"use strict";
//import
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankedV1 = void 0;
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
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
        });
    }
}
exports.RankedV1 = RankedV1;
//# sourceMappingURL=RankedV1.js.map