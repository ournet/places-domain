
// const debug = require('debug')('ournet-places');

import { DeleteUseCase as BaseDeleteUseCase } from '@ournet/domain';
import { IPlace } from '../entities/Place';
import { IPlaceRepository } from './PlaceRepository';

export class PlaceDeleteUseCase extends BaseDeleteUseCase<number, IPlace> {
    constructor(repository: IPlaceRepository) {
        super(repository);
    }
}
