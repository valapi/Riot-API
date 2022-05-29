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
exports.MatchV1 = void 0;
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
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/matches/${matchId}`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ListByPuuid(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/matchlists/by-puuid/${puuid}`);
        });
    }
    /**
     *
     * @param {String} queueId Queue ID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    RecentByQueue(queueId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/match/v1/recent-matches/by-queue/${queueId}`);
        });
    }
}
exports.MatchV1 = MatchV1;
//# sourceMappingURL=MatchV1.js.map