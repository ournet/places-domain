
import { Validator } from '@ournet/domain';
import { IPlace } from '../entities/Place';
import { createPlaceSchema, updatePlaceSchema } from './validation-schemas';

export class PlaceValidator extends Validator<IPlace> {
    constructor() {
        super(createPlaceSchema, updatePlaceSchema);
    }

    private static _instance: PlaceValidator;

    public static get instance() {
        if (!PlaceValidator._instance) {
            PlaceValidator._instance = new PlaceValidator();
        }

        return PlaceValidator._instance;
    }
}
