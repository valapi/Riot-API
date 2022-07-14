"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentV1 = void 0;
const tslib_1 = require("tslib");
//class
class ContentV1 {
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
     * @param {String} locale Locale (default: en-US)
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    Contents(locale = 'en-US') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${locale}`);
        });
    }
}
exports.ContentV1 = ContentV1;
