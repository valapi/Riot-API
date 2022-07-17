"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentV1 = void 0;
const tslib_1 = require("tslib");
//service
class ContentV1 {
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
     * Get content optionally filtered by locale
     * @param {string} locale Locale (default: en-US)
     * @returns {Promise<ValorantApiRequestResponse<ContentDto>>}
     */
    Contents(locale = 'en-US') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.Region.riot.server + `/val/content/v1/contents?locale=${locale}`);
        });
    }
}
exports.ContentV1 = ContentV1;
