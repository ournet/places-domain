
import { Repository, RepositoryAccessOptions } from '@ournet/domain';
import { Place, OldPlaceId } from '../entities/place';

export type PlaceSearchData = {
    query: string
    country: string
    limit: number
    type?: string
}

export type CountryPlacesData = {
    country: string
    limit: number
}

export type PlaceAdminData = {
    country: string
    admin1Code: string
}

export type PlacesAdminData = {
    country: string
    admin1Code: string
    limit: number
}

export interface PlaceRepository extends Repository<Place> {
    search(data: PlaceSearchData, options?: RepositoryAccessOptions<Place>): Promise<Place[]>
    getAdmin1s(data: CountryPlacesData, options?: RepositoryAccessOptions<Place>): Promise<Place[]>
    getAdmin1(data: PlaceAdminData, options?: RepositoryAccessOptions<Place>): Promise<Place | null>
    getPlacesInAdmin1(data: PlacesAdminData, options?: RepositoryAccessOptions<Place>): Promise<Place[]>
    getOldPlaceId(id: number): Promise<OldPlaceId | null>
    getMainPlaces(data: CountryPlacesData, options?: RepositoryAccessOptions<Place>): Promise<Place[]>
}
