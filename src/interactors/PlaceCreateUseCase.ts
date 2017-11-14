
// const debug = require('debug')('ournet-places');

import { CreateUseCase as BaseCreateUseCase } from '@ournet/domain';
import { IPlace } from '../entities/Place';
import { PlaceValidator } from '../validators/PlaceValidator';
import { IPlaceRepository } from './PlaceRepository';

export class PlaceCreateUseCase extends BaseCreateUseCase<number, IPlace> {
    constructor(repository: IPlaceRepository) {
        super(repository, PlaceValidator.instance);
    }
}
