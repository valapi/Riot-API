//import

import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, Locale as _Locale } from "@valapi/lib";

//interface

interface ActDto {
    name: string;
    /**
     * This field is excluded from the response when a locale is set
     */
    localizedNames?: string;
    id: string;
    isActive: boolean;

    [key: string]: any;
}

interface ContentItemDto {
    name: string;
    /**
     * This field is excluded from the response when a locale is set
     */
    localizedNames?: string;
    id: string;
    assetName: string;
    /**
     * This field is only included for maps and game modes. These values are used in the match response.
     */
    assetPath?: string;

    [key: string]: any;
}

interface ContentDto {
    version: string;
    characters: Array<ContentItemDto>;
    maps: Array<ContentItemDto>;
    chromas: Array<ContentItemDto>;
    skins: Array<ContentItemDto>;
    skinLevels: Array<ContentItemDto>;
    equips: Array<ContentItemDto>;
    gameModes: Array<ContentItemDto>;
    sprays: Array<ContentItemDto>;
    sprayLevels: Array<ContentItemDto>;
    charms: Array<ContentItemDto>;
    charmLevels: Array<ContentItemDto>;
    playerCards: Array<ContentItemDto>;
    playerTitles: Array<ContentItemDto>;
    acts: Array<ActDto>;

    [key: string]: any;
}

//service

class ContentV1 {
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
     * Get content optionally filtered by locale
     * @param {string} locale Locale (default: en-US)
     * @returns {Promise<ValorantApiRequestResponse<ContentDto>>}
     */
    public async Contents(locale: keyof typeof _Locale.from = 'en-US'): Promise<ValorantApiRequestResponse<ContentDto>> {
        return await this.RequestClient.get(this.Region.riot.server + `/val/content/v1/contents?locale=${locale}`);
    }
}

//export

export { ContentV1 };
export type { ActDto, ContentItemDto, ContentDto };