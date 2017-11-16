
import test from 'ava';
import { PlaceHelpers } from './PlaceHelpers';

test('formatName', t => {
    t.is(PlaceHelpers.formatName('Name', 'en'), 'Name[en]');
    t.is(PlaceHelpers.formatName('Name', 'RU'), 'Name[ru]');
    t.is(PlaceHelpers.formatName('Name A    ', 'EN'), 'Name A[en]');
});

test('formatNames', t => {
    t.is(PlaceHelpers.formatNames([]), '');
    t.is(PlaceHelpers.formatNames([{ name: 'Name', lang: 'ro' }]), 'Name[ro]');
    t.is(PlaceHelpers.formatNames([
        { name: 'Name', lang: 'ro' },
        { name: 'Name P', lang: 'RO   ', isPreferred: true },
        { name: 'Name 2', lang: 'Ro' },
        { name: 'NO name', lang: 'no' }
    ]), 'Name P[ro]|Name[ro]|Name 2[ro]|NO name[no]');
});

test('parseName', t => {
    t.throws(() => PlaceHelpers.parseName('Name'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseName('Name[RO]'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseName('Name[R]'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseName('Name[RO'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseName('NameRO]'), /'name' is invalid/);
    t.is(PlaceHelpers.parseName('Name[en]').name, 'Name');
    t.is(PlaceHelpers.parseName('Name[en]').lang, 'en');
});

test('parseNames', t => {
    t.throws(() => PlaceHelpers.parseNames('Name'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseNames('Name[ro]|'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseNames('Name[R]'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseNames('Name[RO|'), /'name' is invalid/);
    t.throws(() => PlaceHelpers.parseNames('NameRO]|name'), /'name' is invalid/);
    t.is(PlaceHelpers.parseNames('Name[en]').length, 1);
    t.is(PlaceHelpers.parseNames('Name[en]|Name 2[ro]').length, 2);
});
