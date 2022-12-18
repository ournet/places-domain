export type PlaceFeatureClassType =
  | "A"
  | "H"
  | "L"
  | "P"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V";

export interface Place {
  id: string;
  name: string;
  asciiname: string;
  names?: string;
  latitude: number;
  longitude: number;
  featureClass: PlaceFeatureClassType;
  featureCode: string;
  countryCode: string;
  admin1Code?: string;
  admin2Code?: string;
  admin3Code?: string;
  population?: number;
  elevation?: number;
  dem?: number;
  timezone: string;
  /**
   * Unix timestamp
   */
  updatedAt?: string;

  wikiId?: string;

  admin1?: Place;
}

export enum PlaceFields {
  id = "id",
  name = "name",
  asciiname = "asciiname",
  names = "names",
  latitude = "latitude",
  longitude = "longitude",
  featureClass = "featureClass",
  featureCode = "featureCode",
  countryCode = "countryCode",
  admin1Code = "admin1Code",
  admin2Code = "admin2Code",
  admin3Code = "admin3Code",
  population = "population",
  elevation = "elevation",
  dem = "dem",
  timezone = "timezone",
  updatedAt = "updatedAt",

  wikiId = "wikiId"
}

export const PlaceValidDeleteFields = [
  "names",
  "admin2Code",
  "admin3Code",
  "elevation",
  "dem",
  "wikiId"
];

export interface OldPlaceId {
  id: number;
  geoanmeid: number;
}
