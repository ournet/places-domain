
// import { IPlaceWiki } from './PlaceWiki';

export interface IPlace {
    id: number
    name?: string
    asciiname?: string
    names?: string
    latitude?: number
    longitude?: number
    featureClass?: string
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
