//import

import type { ValorantApiRegion, ValRequestClient, ValorantApiRequestResponse } from "@valapi/lib";

//interface

interface ContentDto {
    locale: string;
    content: string;

    [key: string]: any;
}

interface UpdateDto {
    id: number;
    author: string;
    publish: boolean;
    /**
     * (Legal values: riotclient, riotstatus, game)
     */
    publish_locations: Array<string>;
    translations: Array<ContentDto>;
    created_at: string;
    updated_at: string;

    [key: string]: any;
}

interface StatusDto {
    id: number;
    /**
     * (Legal values: scheduled, in_progress, complete)
     */
    maintenance_status: string;
    /**
     * (Legal values: info, warning, critical)
     */
    incident_severity: string;
    titles: Array<ContentDto>;
    updates: Array<UpdateDto>;
    created_at: string;
    archive_at: string;
    updated_at: string;
    /**
     * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
     */
    platforms: Array<string>;

    [key: string]: any;
}

interface PlatformDataDto {
    id: string;
    name: string;
    locales: Array<string>;
    maintenances: Array<StatusDto>;
    incidents: Array<StatusDto>;

    [key: string]: any;
}

//service

class StatusV1 {
    private RequestClient: ValRequestClient;
    private Region: ValorantApiRegion;

    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    public constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion) {
        this.RequestClient = ValRequestClient;
        this.Region = Region;
    }

    /**
     * Get VALORANT status for the given platform.
     * @returns {Promise<ValorantApiRequestResponse<PlatformDataDto>>}
     */
    public async PlatformData(): Promise<ValorantApiRequestResponse<PlatformDataDto>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/status/v1/platform-data`);
    }
}

//export

export { StatusV1 };
export type { ContentDto, UpdateDto, StatusDto, PlatformDataDto };