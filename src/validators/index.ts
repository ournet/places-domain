
export { PlaceValidator } from './PlaceValidator';
import { createPlaceSchema, updatePlaceSchema } from './validation-schemas';

export function getCreatePlaceSchema(): any {
    return createPlaceSchema;
}

export function getUpdatePlaceSchema(): any {
    return updatePlaceSchema;
}
