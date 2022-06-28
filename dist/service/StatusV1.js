"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusV1 = void 0;
const tslib_1 = require("tslib");
//class
class StatusV1 {
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
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    PlatformData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/status/v1/platform-data`);
        });
    }
}
exports.StatusV1 = StatusV1;
//# sourceMappingURL=StatusV1.js.map