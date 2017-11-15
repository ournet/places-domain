
import { IRepository, RepAccessOptions } from '@ournet/domain';
import { IPlace, IOldPlaceId } from '../entities/Place';

export interface IPlaceRepository extends IRepository<number, IPlace> {
    search(data: { query: string, country: string, limit: number }, options?: RepAccessOptions<IPlace>): Promise<IPlace[]>
    getAdmin1s(data: { country: string, limit: number }, options?: RepAccessOptions<IPlace>): Promise<IPlace[]>
    getAdmin1(data: { country: string, admin1Code: string }, options?: RepAccessOptions<IPlace>): Promise<IPlace>
    getPlacesInAdmin1(data: { country: string, admin1Code: string, limit: number }, options?: RepAccessOptions<IPlace>): Promise<IPlace[]>
    getOldPlaceId(id: number): Promise<IOldPlaceId>
    getMainPlaces(data: { country: string, limit: number }, options?: RepAccessOptions<IPlace>): Promise<IPlace[]>
}
