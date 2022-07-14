"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountV1 = void 0;
const tslib_1 = require("tslib");
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
        });
    }
}
exports.AccountV1 = AccountV1;
