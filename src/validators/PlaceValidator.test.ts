
import test from 'ava';
import { PlaceValidator } from './PlaceValidator';
import { IPlace } from '../entities/Place';

test('invalid create place', t => {
    const id1: IPlace = { id: 1, name: 'Name 1', asciiname: 'Name 1', longitude: 1.1, latitude: 1.2, featureClass: 'P', featureCode: 'PPL', countryCode: 'RU', timezone: 'TZ' };

    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'name', undefined)), /"name" is required/, 'name is required (undefined)');
    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'name', null)), /"name" must be a string/, '"name" must be a string');
    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'name', '')), /"name" is not allowed to be empty/, '"name" is not allowed to be empty');
    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'name', '  ')), /"name" is not allowed to be empty/, '"name" is not allowed to be empty ("  " whitespace)');

    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'countryCode', undefined)), /"countryCode" is required/, 'countryCode is required (undefined)');
    t.throws(() => PlaceValidator.instance.create(updateObj(id1, 'countryCode', 'MDA')), /"countryCode" length must be 2 characters long/, '"countryCode" length must be 2 characters long');
});

test('invalid update place', t => {

    t.throws(() => PlaceValidator.instance.update({ item: { id: 1 } }), /"updatedAt" is required/, '"updatedAt" is required');
    // t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, name: undefined } }), /"name" is required/, 'name is required (undefined)');
    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, name: '' } }), /"name" is not allowed to be empty/, '"name" is not allowed to be empty');
    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, name: '   ' } }), /"name" is not allowed to be empty/, '"name" is not allowed to be empty');
    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, name: null } }), /"name" must be a string/, '"name" must be a string');

    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, countryCode: null } }), /"countryCode" must be a string/, 'countryCode must be a string');
    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111, countryCode: 'MDA' } }), /"countryCode" length must be 2 characters long/, '"countryCode" length must be 2 characters long');

    t.throws(() => PlaceValidator.instance.update({ item: { id: 1, updatedAt: 111 }, delete: ['id'] }), /child "delete" fails/, 'cannot delete a reaquired field');
});

test('valid create place', t => {
    const id1: IPlace = { id: 1, name: 'Name 1 ', asciiname: 'Name 1', longitude: 1.1, latitude: 1.2, featureClass: 'P', featureCode: 'PPL', countryCode: 'RU', timezone: 'TZ' };

    const rid1 = PlaceValidator.instance.create(id1);

    t.is(rid1.id, id1.id, 'created place id = input place id');
    t.is(rid1.name, 'Name 1', 'created place name = input.name.trim()');
    t.is(rid1.countryCode, 'ru', 'countryCode lowercase');
});

test('valid update place', t => {
    const id1 = { id: 1, name: '   NAME 1 ', updatedAt: Date.now() };

    const rid1u = PlaceValidator.instance.update({ item: id1 });

    t.is(rid1u.item.id, id1.id, 'updated place id = input place id');
    t.is(rid1u.item.name, 'NAME 1', 'trim name');
});

function updateObj<T extends { [name: string]: any }>(obj: T, field: string, value: any): T {
    const nobj = Object.assign({}, obj);
    if (value === undefined) {
        delete nobj[field];
    } else {
        nobj[field] = value;
    }

    return nobj;
}
