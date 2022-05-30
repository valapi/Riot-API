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
exports.ContentV1 = void 0;
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
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.RequestClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${locale}`);
        });
    }
}
exports.ContentV1 = ContentV1;
//# sourceMappingURL=ContentV1.js.map