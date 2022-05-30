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
exports.AccountV1 = void 0;
//class
class AccountV1 {
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
     * @param {String} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByPuuid(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}`);
        });
    }
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ByRiotId(gameName, tagLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game (default: val)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    ActiveShardsByGameAndPuuid(puuid, game = 'val') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
        });
    }
}
exports.AccountV1 = AccountV1;
//# sourceMappingURL=AccountV1.js.map