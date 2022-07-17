import { type ValorantApiRegion, type ValRequestClient, type ValorantApiRequestResponse, Locale as _Locale } from "@valapi/lib";
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
declare class ContentV1 {
    private RequestClient;
    private Region;
    /**
     * Class Constructor
     * @param {ValRequestClient} ValRequestClient Request Client
     * @param {ValorantApiRegion} Region Region Service Data
     */
    constructor(ValRequestClient: ValRequestClient, Region: ValorantApiRegion);
    /**
     * Get content optionally filtered by locale
     * @param {string} locale Locale (default: en-US)
     * @returns {Promise<ValorantApiRequestResponse<ContentDto>>}
     */
    Contents(locale?: keyof typeof _Locale.from): Promise<ValorantApiRequestResponse<ContentDto>>;
}
export { ContentV1 };
export type { ActDto, ContentItemDto, ContentDto };
