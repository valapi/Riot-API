//import
import { ValEvent, ValRegion, Region as _Region, type ValorantApiRegion, type ValorantApiError, type ValorantApiRequestData, ValRequestClient } from '@valapi/lib';

import type { AxiosRequestConfig } from 'axios';

import { AccountV1 } from '../service/AccountV1';
import { ContentV1 } from '../service/ContentV1';
import { MatchV1 } from '../service/MatchV1';
import { RankedV1 } from '../service/RankedV1';
import { StatusV1 } from '../service/StatusV1';

//interface

namespace RiotAPIClient {
    export interface Config {
        apiKey: string;
        region: keyof typeof _Region.from;
        expiresIn?: number;
        axiosConfig?: AxiosRequestConfig;
    }

    export interface Event {
        'ready': () => void;
        'expires': (data: { name: string, data: any }) => void;
        'request': (data: ValorantApiRequestData) => void;
        'changeSettings': (data: { name: string, data: any }) => void;
        'error': (data: ValorantApiError) => void;
    }
}

//event

declare interface RiotAPIClient {
    emit<EventName extends keyof RiotAPIClient.Event>(name: EventName, ...args: Parameters<RiotAPIClient.Event[EventName]>): void;
    on<EventName extends keyof RiotAPIClient.Event>(name: EventName, callback: RiotAPIClient.Event[EventName]): void;
    once<EventName extends keyof RiotAPIClient.Event>(name: EventName, callback: RiotAPIClient.Event[EventName]): void;
    off<EventName extends keyof RiotAPIClient.Event>(name: EventName, callback?: RiotAPIClient.Event[EventName]): void;
}

//class

/**
 * Official Api From Riot Games
 */
class RiotAPIClient extends ValEvent {
    protected config: RiotAPIClient.Config;
    public createAt: number;

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
     * @param {RiotAPIClient.Config} config Config
     */
    public constructor(config: RiotAPIClient.Config) {
        super();

        this.createAt = new Date().getTime();

        //config
        this.config = config;

        //first reload
        if ((new Date().getTime()) >= (this.createAt + Number(this.config.expiresIn || 86400000))) {
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }

        this.RegionServices = new ValRegion(this.config.region).toJSON();

        const _normalAxiosConfig: AxiosRequestConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new ValRequestClient({ ..._normalAxiosConfig, ...this.config.axiosConfig });
        this.RequestClient.on('error', ((data: ValorantApiError) => { this.emit('error', data) }));
        this.RequestClient.on('request', ((data: ValorantApiRequestData) => { this.emit('request', data as ValorantApiRequestData); }));

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
    private reload(): void {
        if ((new Date().getTime()) >= (this.createAt + Number(this.config.expiresIn || 86400000))) {
            this.emit('expires', {
                name: 'apiKey',
                data: this.config.apiKey,
            });
        }

        this.RegionServices = new ValRegion(this.config.region).toJSON();

        const _normalAxiosConfig: AxiosRequestConfig = {
            headers: {
                'X-Riot-Token': `${this.config.apiKey}`,
            },
        };
        this.RequestClient = new ValRequestClient({ ..._normalAxiosConfig, ...this.config.axiosConfig });
        this.RequestClient.on('error', ((data: ValorantApiError) => { this.emit('error', data) }));
        this.RequestClient.on('request', ((data: ValorantApiRequestData) => { this.emit('request', data as ValorantApiRequestData); }));

        this.AccountV1 = new AccountV1(this.RequestClient, this.RegionServices);
        this.ContentV1 = new ContentV1(this.RequestClient, this.RegionServices);
        this.MatchV1 = new MatchV1(this.RequestClient, this.RegionServices);
        this.RankedV1 = new RankedV1(this.RequestClient, this.RegionServices);
        this.StatusV1 = new StatusV1(this.RequestClient, this.RegionServices);

        //event
        this.emit('ready');
    }

    //settings

    /**
     * 
     * @param {String} apiKey IP of local api
     * @returns {void}
     */
    public setApiKey(apiKey: string): void {
        this.config.apiKey = apiKey;

        this.emit('changeSettings', { name: 'API_Key', data: apiKey });
        this.reload();
    }

    /**
     * 
     * @param {String} region Username
     * @returns {void}
     */
    public setRegion(region: keyof typeof _Region.from = 'na'): void {
        this.config.region = region;

        this.emit('changeSettings', { name: 'Region', data: region });
        this.reload();
    }
}

//export

export { RiotAPIClient };