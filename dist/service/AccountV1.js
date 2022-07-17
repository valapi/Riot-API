"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountV1 = void 0;
const tslib_1 = require("tslib");
//service
class AccountV1 {
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
     * Get account by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByPuuid(puuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}`);
        });
    }
    /**
     * Get account by riot id
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByRiotId(gameName, tagLine) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
        });
    }
    /**
     * Get active shard for a player
     * @param {string} puuid Player UUID
     * @param {string} game Game (default: val)
     * @returns {Promise<ValorantApiRequestResponse<ActiveShardDto>>}
     */
    ActiveShardsByGameAndPuuid(puuid, game = 'val') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
        });
    }
    /**
     * Get account by access token
     * * Not For Public Use
     * @param {string} authorization (Header Parameters)
     * @returns {Promise<ValorantApiRequestResponse<AccountDto>>}
     */
    ByAccessToken(authorization) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.api + `/riot/account/v1/accounts/me`, {
                headers: {
                    'Authorization': `${authorization}`
                }
            });
        });
    }
}
exports.AccountV1 = AccountV1;
