"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusV1 = void 0;
const tslib_1 = require("tslib");
//service
class StatusV1 {
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
     * Get VALORANT status for the given platform.
     * @returns {Promise<ValorantApiRequestResponse<PlatformDataDto>>}
     */
    PlatformData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/status/v1/platform-data`);
        });
    }
}
exports.StatusV1 = StatusV1;
