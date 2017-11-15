
// import { IPlaceWiki } from './PlaceWiki';

export type PlaceFeatureClassType = 'A' | 'H' | 'L' | 'P' | 'R' | 'S' | 'T' | 'U' | 'V';

export interface IPlace {
    id: number
    name?: string
    asciiname?: string
    names?: string
    latitude?: number
    longitude?: number
    featureClass?: PlaceFeatureClassType
    featureCode?: string
    countryCode?: string
    admin1Code?: string
    admin2Code?: string
    admin3Code?: string
    population?: number
    elevation?: string
    dem?: number
    timezone?: string
    /**
     * Unix timestamp
     */
    updatedAt?: number

    wikiId?: string
    // wiki?: IPlaceWiki

    admin1?: IPlace
}

export enum PlaceFields {
    id = 'id',
    name = 'name',
    asciiname = 'asciiname',
    names = 'names',
    latitude = 'latitude',
    longitude = 'longitude',
    featureClass = 'featureClass',
    featureCode = 'featureCode',
    countryCode = 'countryCode',
    admin1Code = 'admin1Code',
    admin2Code = 'admin2Code',
    admin3Code = 'admin3Code',
    population = 'population',
    elevation = 'elevation',
    dem = 'dem',
    timezone = 'timezone',
    updatedAt = 'updatedAt',

    wikiId = 'wikiId'
}

export interface IOldPlaceId {
    id: number
    geoanmeid: number
}
