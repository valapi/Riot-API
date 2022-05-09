//import
import { CustomEvent, ValRegion, Region as _Region, ValorantAPIRegion } from '@valapi/lib';

import type { AxiosRequestConfig } from 'axios';
import type { RiotAPIAxiosError } from './AxiosClient';

import { AccountV1 } from '../service/AccountV1';
import { ContentV1 } from '../service/ContentV1';
import { StatusV1 } from '../service/StatusV1';

import { AxiosClient } from "./AxiosClient";

//interface

type RiotAPIProtocol = 'http' | 'https';

interface RiotAPILockfile {
    name: string;
    pid: number;
    port: number;
    password: string;
    protocol: RiotAPIProtocol;
}

interface RiotAPIConfig {
    apiKey: string;
    region: keyof typeof _Region;
    axiosConfig?: AxiosRequestConfig;
}

interface RiotAPIError {
    errorCode: string,
    message: string,
    data: any,
}

//class

/**
 * Official Api From Riot Games
 */
class RiotAPIClient extends CustomEvent {
    protected config: RiotAPIConfig;
    protected apiKey:string;

    //reload
    private RegionServices: ValorantAPIRegion;
    private AxiosClient: AxiosClient;

    public AccountV1: AccountV1;
    public ContentV1: ContentV1;
    public StatusV1: StatusV1;

    /**
     * @param {RiotAPIConfig} config Config
     */
    constructor(config:RiotAPIConfig) {
        super();

        if(config.region === 'data'){
            this.emit('error', { errorCode: 'RiotAPI_Config_Error', message: 'Region Not Found', data: config.region });
            config.region = 'na';
        }

        //config
        this.apiKey = config.apiKey;

        if(!config.axiosConfig){
            config.axiosConfig = {};
        }

        this.config = config;

        //first reload
        this.RegionServices = new ValRegion(this.config.region).toJSON();

        this.AxiosClient = new AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data:RiotAPIAxiosError) => { this.emit('error', data) }));

        this.AccountV1 = new AccountV1(this.AxiosClient, this.apiKey, this.RegionServices);
        this.ContentV1 = new ContentV1(this.AxiosClient, this.apiKey, this.RegionServices);
        this.StatusV1 = new StatusV1(this.AxiosClient, this.apiKey, this.RegionServices);

        //evet
        this.emit('ready')
    }

    /**
     * @returns {void}
     */
    private reload():void {
        this.RegionServices = new ValRegion(this.config.region).toJSON();

        this.AxiosClient = new AxiosClient(this.config.axiosConfig);
        this.AxiosClient.on('error', ((data:RiotAPIAxiosError) => { this.emit('error', data) }));

        this.AccountV1 = new AccountV1(this.AxiosClient, this.apiKey, this.RegionServices);
        this.ContentV1 = new ContentV1(this.AxiosClient, this.apiKey, this.RegionServices);
        this.StatusV1 = new StatusV1(this.AxiosClient, this.apiKey, this.RegionServices);
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
     public setRegion(region:keyof typeof _Region = 'na'):void {
        this.config.region = region

        if(region === 'data'){
            this.emit('error', { errorCode: 'RiotAPI_Config_Error', message: 'Region Not Found', data: region });
            region = 'na';
        }

        this.emit('changeSettings', { name: 'Region', data: region });
        this.reload();
    }
}

//event
interface RiotAPIClientEvent {
    'ready': () => void,
    'changeSettings': (data: { name:string, data:any }) => void,
    'error': (data: RiotAPIError) => void;
}

declare interface RiotAPIClient {
    emit<EventName extends keyof RiotAPIClientEvent>(name: EventName, ...args: Parameters<RiotAPIClientEvent[EventName]>): void;
    on<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    once<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    off<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback?: RiotAPIClientEvent[EventName]): void;
}

//export
export { RiotAPIClient };
export type { RiotAPIProtocol, RiotAPILockfile, RiotAPIConfig, RiotAPIError, RiotAPIClientEvent };