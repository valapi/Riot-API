//import
import { ValEvent, ValRegion, Region as _Region, type ValorantApiRegion, type ValorantApiError, type ValorantApiRequestData, ValRequestClient } from '@valapi/lib';

import type { AxiosRequestConfig } from 'axios';

import { AccountV1 } from '../service/AccountV1';
import { ContentV1 } from '../service/ContentV1';
import { MatchV1 } from '../service/MatchV1';
import { RankedV1 } from '../service/RankedV1';
import { StatusV1 } from '../service/StatusV1';

//interface

interface RiotAPIConfig {
    apiKey: string;
    region: keyof typeof _Region.from;
    expiresIn?: number;
    axiosConfig?: AxiosRequestConfig;
}

//class

/**
 * Official Api From Riot Games
 */
class RiotAPIClient extends ValEvent {
    protected config: RiotAPIConfig;
    public expireAt: Date;

    //reload
    private RegionServices: ValorantApiRegion;
    private RequestClient: ValRequestClient;

    public AccountV1: AccountV1;
    public ContentV1: ContentV1;
    public MatchV1: MatchV1;
    public RankedV1: RankedV1;
    public StatusV1: StatusV1;

    /**
     * Class Constructor
     * @param {RiotAPIConfig} config Config
     */
     public constructor(config:RiotAPIConfig) {
        super();

        //config
        this.config = config;

        //first reload
        this.expireAt = new Date(Date.now() + (this.config.expiresIn || 86400000));
        if(new Date() >= this.expireAt){
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }

        this.RegionServices = new ValRegion(this.config.region).toJSON();

        const _normalAxiosConfig:AxiosRequestConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new ValRequestClient(new Object({ ..._normalAxiosConfig, ...this.config.axiosConfig }));
        this.RequestClient.on('error', ((data:ValorantApiError) => { this.emit('error', data) }));
        this.RequestClient.on('request', ((data:ValorantApiRequestData) => { this.emit('request', data as ValorantApiRequestData); if(this.config.expiresIn){ this.reload(); } }));

        this.AccountV1 = new AccountV1(this.RequestClient, this.RegionServices);
        this.ContentV1 = new ContentV1(this.RequestClient, this.RegionServices);
        this.MatchV1 = new MatchV1(this.RequestClient, this.RegionServices);
        this.RankedV1 = new RankedV1(this.RequestClient, this.RegionServices);
        this.StatusV1 = new StatusV1(this.RequestClient, this.RegionServices);

        //evet
        this.emit('ready')
    }

    /**
     * @returns {void}
     */
     private reload():void {
        this.expireAt = new Date(Date.now() + (this.config.expiresIn || 86400000));
        if(new Date() >= this.expireAt){
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }

        this.RegionServices = new ValRegion(this.config.region).toJSON();

        const _normalAxiosConfig:AxiosRequestConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new ValRequestClient(new Object({ ..._normalAxiosConfig, ...this.config.axiosConfig }));
        this.RequestClient.on('error', ((data:ValorantApiError) => { this.emit('error', data) }));
        this.RequestClient.on('request', ((data:ValorantApiRequestData) => { this.emit('request', data as ValorantApiRequestData); if(this.config.expiresIn){ this.reload(); } }));

        this.AccountV1 = new AccountV1(this.RequestClient, this.RegionServices);
        this.ContentV1 = new ContentV1(this.RequestClient, this.RegionServices);
        this.MatchV1 = new MatchV1(this.RequestClient, this.RegionServices);
        this.RankedV1 = new RankedV1(this.RequestClient, this.RegionServices);
        this.StatusV1 = new StatusV1(this.RequestClient, this.RegionServices);

        //event
        this.emit('ready');
    }

    // SETTINGS //

    /**
     * 
     * @param {String} apiKey IP of local api
     * @returns {void}
     */
     public setApiKey(apiKey:string):void {
        this.config.apiKey = apiKey;

        this.emit('changeSettings', { name: 'API_Key', data: apiKey });
        this.reload();
    }

    /**
     * 
     * @param {String} region Username
     * @returns {void}
     */
     public setRegion(region:keyof typeof _Region.from = 'na'):void {
        this.config.region = region;

        this.emit('changeSettings', { name: 'Region', data: region });
        this.reload();
    }
}

//event
interface RiotAPIClientEvent {
    'ready': () => void;
    'expires': (data: { name: string, data: any }) => void;
    'request': (data: ValorantApiRequestData) => void;
    'changeSettings': (data: { name: string, data: any }) => void;
    'error': (data: ValorantApiError) => void;
}

declare interface RiotAPIClient {
    emit<EventName extends keyof RiotAPIClientEvent>(name: EventName, ...args: Parameters<RiotAPIClientEvent[EventName]>): void;
    on<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    once<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    off<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback?: RiotAPIClientEvent[EventName]): void;
}

//export
export { RiotAPIClient };
export type { RiotAPIConfig, RiotAPIClientEvent };