
// const debug = require('debug')('ournet-places');

import { UpdateUseCase as BaseUpdateUseCase } from '@ournet/domain';
import { IPlace } from '../entities/Place';
import { PlaceValidator } from '../validators/PlaceValidator';
import { IPlaceRepository } from './PlaceRepository';

export class PlaceUpdateUseCase extends BaseUpdateUseCase<number, IPlace> {
    constructor(repository: IPlaceRepository) {
        super(repository, PlaceValidator.instance);
    }
}