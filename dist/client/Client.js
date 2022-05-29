"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotAPIClient = void 0;
//import
const lib_1 = require("@valapi/lib");
const AccountV1_1 = require("../service/AccountV1");
const ContentV1_1 = require("../service/ContentV1");
const MatchV1_1 = require("../service/MatchV1");
const RankedV1_1 = require("../service/RankedV1");
const StatusV1_1 = require("../service/StatusV1");
//class
/**
 * Official Api From Riot Games
 */
class RiotAPIClient extends lib_1.ValEvent {
    /**
     * Class Constructor
     * @param {RiotAPIConfig} config Config
     */
    constructor(config) {
        super();
        //config
        this.config = config;
        //first reload
        this.expireAt = new Date(Date.now() + (this.config.expiresIn || 86400000));
        if (new Date() >= this.expireAt) {
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }
        this.RegionServices = new lib_1.ValRegion(this.config.region).toJSON();
        const _normalAxiosConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new lib_1.ValRequestClient(new Object(Object.assign(Object.assign({}, _normalAxiosConfig), this.config.axiosConfig)));
        this.RequestClient.on('error', ((data) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data) => { this.emit('request', data); if (this.config.expiresIn) {
            this.reload();
        } }));
        this.AccountV1 = new AccountV1_1.AccountV1(this.RequestClient, this.RegionServices);
        this.ContentV1 = new ContentV1_1.ContentV1(this.RequestClient, this.RegionServices);
        this.MatchV1 = new MatchV1_1.MatchV1(this.RequestClient, this.RegionServices);
        this.RankedV1 = new RankedV1_1.RankedV1(this.RequestClient, this.RegionServices);
        this.StatusV1 = new StatusV1_1.StatusV1(this.RequestClient, this.RegionServices);
        //evet
        this.emit('ready');
    }
    /**
     * @returns {void}
     */
    reload() {
        this.expireAt = new Date(Date.now() + (this.config.expiresIn || 86400000));
        if (new Date() >= this.expireAt) {
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }
        this.RegionServices = new lib_1.ValRegion(this.config.region).toJSON();
        const _normalAxiosConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new lib_1.ValRequestClient(new Object(Object.assign(Object.assign({}, _normalAxiosConfig), this.config.axiosConfig)));
        this.RequestClient.on('error', ((data) => { this.emit('error', data); }));
        this.RequestClient.on('request', ((data) => { this.emit('request', data); if (this.config.expiresIn) {
            this.reload();
        } }));
        this.AccountV1 = new AccountV1_1.AccountV1(this.RequestClient, this.RegionServices);
        this.ContentV1 = new ContentV1_1.ContentV1(this.RequestClient, this.RegionServices);
        this.MatchV1 = new MatchV1_1.MatchV1(this.RequestClient, this.RegionServices);
        this.RankedV1 = new RankedV1_1.RankedV1(this.RequestClient, this.RegionServices);
        this.StatusV1 = new StatusV1_1.StatusV1(this.RequestClient, this.RegionServices);
        //event
        this.emit('ready');
    }
    // SETTINGS //
    /**
     *
     * @param {String} apiKey IP of local api
     * @returns {void}
     */
    setApiKey(apiKey) {
        this.config.apiKey = apiKey;
        this.emit('changeSettings', { name: 'API_Key', data: apiKey });
        this.reload();
    }
    /**
     *
     * @param {String} region Username
     * @returns {void}
     */
    setRegion(region = 'na') {
        this.config.region = region;
        this.emit('changeSettings', { name: 'Region', data: region });
        this.reload();
    }
}
exports.RiotAPIClient = RiotAPIClient;
//# sourceMappingURL=Client.js.map