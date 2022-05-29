import { ValEvent, Region as _Region, type ValorantApiError, type ValorantApiRequestData } from '@valapi/lib';
import type { AxiosRequestConfig } from 'axios';
import { AccountV1 } from '../service/AccountV1';
import { ContentV1 } from '../service/ContentV1';
import { MatchV1 } from '../service/MatchV1';
import { RankedV1 } from '../service/RankedV1';
import { StatusV1 } from '../service/StatusV1';
interface RiotAPIConfig {
    apiKey: string;
    region: keyof typeof _Region.from;
    expiresIn?: number;
    axiosConfig?: AxiosRequestConfig;
}
/**
 * Official Api From Riot Games
 */
declare class RiotAPIClient extends ValEvent {
    protected config: RiotAPIConfig;
    expireAt: Date;
    private RegionServices;
    private RequestClient;
    AccountV1: AccountV1;
    ContentV1: ContentV1;
    MatchV1: MatchV1;
    RankedV1: RankedV1;
    StatusV1: StatusV1;
    /**
     * Class Constructor
     * @param {RiotAPIConfig} config Config
     */
    constructor(config: RiotAPIConfig);
    /**
     * @returns {void}
     */
    private reload;
    /**
     *
     * @param {String} apiKey IP of local api
     * @returns {void}
     */
    setApiKey(apiKey: string): void;
    /**
     *
     * @param {String} region Username
     * @returns {void}
     */
    setRegion(region?: keyof typeof _Region.from): void;
}
interface RiotAPIClientEvent {
    'ready': () => void;
    'expires': (data: {
        name: string;
        data: any;
    }) => void;
    'request': (data: ValorantApiRequestData) => void;
    'changeSettings': (data: {
        name: string;
        data: any;
    }) => void;
    'error': (data: ValorantApiError) => void;
}
declare interface RiotAPIClient {
    emit<EventName extends keyof RiotAPIClientEvent>(name: EventName, ...args: Parameters<RiotAPIClientEvent[EventName]>): void;
    on<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    once<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback: RiotAPIClientEvent[EventName]): void;
    off<EventName extends keyof RiotAPIClientEvent>(name: EventName, callback?: RiotAPIClientEvent[EventName]): void;
}
export { RiotAPIClient };
export type { RiotAPIConfig, RiotAPIClientEvent };
//# sourceMappingURL=Client.d.ts.map