
import { IDictionary } from '@ournet/domain';

const SEPARATOR = '|';

export class PlaceHelpers {

    static formatNames(names: { name: string, lang: string, isPreferred?: boolean }[]): string {
        names = names.map(item => {
            return {
                name: item.name.trim(),
                lang: item.lang.trim().toLowerCase(),
                isPreferred: item.isPreferred
            }
        });

        const namesByLang = names.reduce<IDictionary<{ name: string, lang: string, isPreferred?: boolean }[]>>(function (r, a) {
            r[a.lang] = r[a.lang] || [];
            r[a.lang].push(a);
            return r;
        }, Object.create(null));

        return Object.keys(namesByLang).map(lang => {
            const langNames = namesByLang[lang];
            const preferredIndex = langNames.findIndex(item => item.isPreferred === true);

            if (preferredIndex > -1) {
                const preferred = langNames[preferredIndex];
                langNames.splice(preferredIndex, 1);
                langNames.unshift(preferred);
            }

            return langNames.map(item => PlaceHelpers.formatName(item.name, item.lang)).join(SEPARATOR);
        }).join(SEPARATOR);
    }

    static formatName(name: string, lang: string): string {
        return name.trim() + '[' + lang.trim().toLowerCase() + ']';
    }

    static parseNames(names: string): { name: string, lang: string }[] {
        return names.split(/\|/g).map(name => PlaceHelpers.parseName(name));
    }

    static parseName(name: string): { name: string, lang: string } {
        if (!/\[[a-z]{2}\]$/.test(name)) {
            throw new Error(`'name' is invalid`);
        }
        return {
            name: name.substr(0, name.length - 4),
            lang: name.substr(name.length - 3, 2)
        };
    }
}
