
import test from 'ava';
import { PlaceValidator } from './PlaceValidator';

const validData = {
    create: [
        { id: 1, name: 'Name 1', longitude: 1.1, latitude: 1.2, featureClass: 'P', featureCode: 'PPL', countryCode: 'RU', timezone: 'TZ' }
    ],
    update: [
        { id: 1, name: 'NAME 1', updatedAt: Date.now() }
    ]
}

test('validate create place', t => {
    validData.create.forEach(data => t.is(PlaceValidator.instance.create(data).id, data.id, 'created place id = input place id'));
    validData.update.forEach(data => t.is(PlaceValidator.instance.update({ item: data }).item.id, data.id, 'updated place id = input place id'));
});
