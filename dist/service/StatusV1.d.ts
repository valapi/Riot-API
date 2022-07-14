import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";
interface RiotAPIServiceStatusContent {
    locale: string;
    content: string;
    [key: string]: any;
}
interface RiotAPIServiceStatusUpdate {
    id: number;
    author: string;
    publish_locations: Array<string>;
    translations: Array<RiotAPIServiceStatusContent>;
    created_at: string;
    updated_at: string;
    [key: string]: any;
}
interface RiotAPIServiceStatusStatus {
    id: number;
    maintenance_status: string;
    incident_severity: string;
    titles: Array<RiotAPIServiceStatusContent>;
    updates: Array<RiotAPIServiceStatusUpdate>;
    created_at: string;
    archive_at: string;
    updated_at: string;
    platforms: Array<string>;
    [key: string]: any;
}
interface RiotAPIServiceStatusPlatform {
    id: string;
    name: string;
    locales: Array<string>;
    maintenances: Array<RiotAPIServiceStatusStatus>;
    incidents: Array<RiotAPIServiceStatusStatus>;
    [key: string]: any;
}
declare class StatusV1 {
    private region;
    private RequestClient;
    /**
     * Class Constructor
     * @param RequestClient Axios Client
     * @param Region Region Service
     */
    constructor(RequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     * @returns {Promise<ValorantApiRequestResponse>}
     */
    PlatformData(): Promise<ValorantApiRequestResponse<RiotAPIServiceStatusPlatform>>;
}
export { StatusV1 };
export type { RiotAPIServiceStatusContent, RiotAPIServiceStatusPlatform, RiotAPIServiceStatusStatus, RiotAPIServiceStatusUpdate };
